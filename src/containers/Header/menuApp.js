export const adminMenu = [
    { //Quan ly nguoi dung
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.manage-admin', link: '/system/user-manage'
            },
            {
                name: 'menu.admin.manage-band', link: '/system/manage-member'
            },
            {
                name: 'menu.tour.manage-tour', link: '/tour/manage-tour'
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-crud-redux'
            },
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]

    },
    { //Quan ly nguoi dung
        name: 'menu.admin.tour',
        menus: [
            {
                name: 'menu.tour.manage-tour', link: 'tour/manage-band'
            },
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]

    },
];

export const memberMenu = [
    { //Quan ly nguoi dung
        name: 'menu.member.manage-member',
        menus: [
            {
                name: 'menu.member.manage-schedule', link: '/member/manage-schedule'
            },
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]

    }
];