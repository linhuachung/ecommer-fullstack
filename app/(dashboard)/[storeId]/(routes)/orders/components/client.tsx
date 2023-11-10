"use client";

import {Heading} from "@/components/ui/heading";
import React from "react";
import {Separator} from "@/components/ui/separator";
import {DataTable} from "@/components/ui/data-table";
import {columns, OrderColumn} from "@/app/(dashboard)/[storeId]/(routes)/orders/components/columns";

interface OderClientProps {
    data: OrderColumn[]
}

export const OrderClient: React.FC<OderClientProps> = ({data}) => {
    return (
        <>
            <Heading title={`Orders (${data.length})`} description="Manage orders for your store"/>
            <Separator/>
            <DataTable columns={columns} data={data} searchKey={"products"}/>
        </>
    );
};
