# Go LDAP Admin UI (Dashug Fork)

前端管理界面，配合后端实现目录与第三方平台的可视化配置。

## 致谢

本项目基于 [eryajf/go-ldap-admin-ui](https://github.com/eryajf/go-ldap-admin-ui) 二次开发，感谢原作者与全部贡献者。

## 核心功能

- 用户/分组管理界面
- 目录类型展示（OpenLDAP / AD）
- 目录快速配置入口（地址、DN、类型、同步开关）
- 平台对接向导（钉钉/企微/飞书）
- 测试连接 + 保存配置

## 当前前端对接接口

- `GET /api/base/config`
- `POST /api/base/directoryConfig`
- `POST /api/base/thirdPartyConfig`
- `POST /api/base/thirdPartyConfig/test`

## 维护仓库

- 后端：<https://github.com/dashug/go-ldap-admin>
- 前端：<https://github.com/dashug/go-ldap-admin-ui>
