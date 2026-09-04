"use client"


import { useGetTotalValues } from '@/hooks/useGetTotalValues';
import {
    Pie,
    PieChart,
    PieLabelRenderProps,
    PieSectorShapeProps,
    Sector,
    useActiveTooltipDataPoints,
    useIsTooltipActive,
} from 'recharts';




const RADIAN = Math.PI / 180;
const COLORS = ['#22c55e', '#ef4444'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: PieLabelRenderProps) => {
    if (cx == null || cy == null || innerRadius == null || outerRadius == null) {
        return null;
    }
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const ncx = Number(cx);
    const x = ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
    const ncy = Number(cy);
    const y = ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > ncx ? 'start' : 'end'} dominantBaseline="central">
            {`${((percent ?? 1) * 100).toFixed(0)}%`}
        </text>
    );
};

const MyCustomPie = (props: PieSectorShapeProps) => {
    const p = useActiveTooltipDataPoints();
    const isAnyPieActive = useIsTooltipActive();
    const isThisPieActive = isAnyPieActive && props.payload === p?.[0];
    let fillOpacity: number;
    if (isAnyPieActive && !isThisPieActive) {
        fillOpacity = 0.5;
    } else {
        fillOpacity = 1;
    }
    return (
        <Sector
            {...props}
            fill={COLORS[props.index % COLORS.length]}
            stroke="none"
            fillOpacity={fillOpacity}
            style={{ transition: 'fill-opacity 0.3s ease' }}
        />
    );
};

export default function PieChartWithCustomizedLabel({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
    const {totalIncome, totalExpense, loading} = useGetTotalValues()
    const data = [
        {
            name: 'Income',
            value: !loading && totalIncome,
            color: '#22c55e',
        },
        {
            name: 'Expense',
            value: !loading && totalExpense,
            color: '#ef4444',
        },
    ];


    return (
        <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="flex items-center justify-center gap-6 text-sm text-gray-200">
                {data.map((entry) => (
                    <div key={entry.name} className="flex items-center gap-2">
                        <span
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: entry.color }}
                        />
                        <span>{entry.name}</span>
                    </div>
                ))}
            </div>

            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    labelLine={false}
                    label={renderCustomizedLabel}
                    dataKey="value"
                    nameKey="name"
                    isAnimationActive={isAnimationActive}
                    shape={MyCustomPie}
                />
            </PieChart>
        </div>
    );
}