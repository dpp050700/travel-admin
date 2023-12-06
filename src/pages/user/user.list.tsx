import React, { useRef } from "react";
import type { ActionType, ProColumns } from "@ant-design/pro-components";
import { ProTable } from "@ant-design/pro-components";
import { getUserList } from "@services/user";
import { V1User } from "types/models/v1-user";

const columns: ProColumns<V1User>[] = [
  {
    dataIndex: "index",
    valueType: "indexBorder",
    width: 48,
  },
  {
    title: "昵称",
    dataIndex: "nickname",
    ellipsis: true,
    formItemProps: {
      rules: [
        {
          required: true,
          message: "此项为必填项",
        },
      ],
    },
  },
  {
    title: "邮箱",
    dataIndex: "email",
    ellipsis: true,
  },
  {
    title: "性别",
    dataIndex: "gender",
    ellipsis: true,
    valueType: "select",
    valueEnum: {
      all: { text: "全部" },
      man: {
        text: "男",
      },
      woman: {
        text: "女",
      },
    },
  },
  {
    title: "注册时间",
    dataIndex: "createdAt",
    ellipsis: true,
    valueType: "dateTime",
  },
];

const TablePage: React.FC = () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<V1User>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params) => {
        console.log(params, 222);
        const data = {
          "page.limit": params.pageSize!,
          "page.offset": params.current! - 1,
        };
        const res = await getUserList(data);
        return {
          data: res.users || [],
          success: true,
          total: res.total,
        };
      }}
      editable={{
        type: "multiple",
      }}
      rowKey="id"
      search={false}
      pagination={{ pageSize: 10 }}
      headerTitle="用户列表"
    />
  );
};

export default TablePage;
