import { AiOutlineCamera } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { FiBarChart2, FiMenu, FiSettings } from "react-icons/fi";
import { FiCreditCard, FiLayout, FiTrendingUp, FiUsers } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiGrid, FiPlus } from "react-icons/fi";
import React, { useState } from 'react';
import { Select, Input } from 'antd';
// import avatar from "../../images/avatar.svg";
import "./Sidebar.css"
import exclamation from "../../images/!.svg";

import { Avatar, Breadcrumb, Layout, Menu, theme } from 'antd';
const { Content, Sider } = Layout;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  };
}
const items = [
  getItem(<p className='text-3xl font-serif font-medium flex align-center justify-between'>Hotelier <BsBell className="text-xl text-center mt-2 text-[#8F9BB3]" /></p>, '1', <span style={{ fontSize: '22px', color: '#8F9BB3' }}><FiMenu /></span>),
  getItem(<p className='text-sm font-medium'>Шахматка</p>, '3', <span style={{ fontSize: '20px', color: '#8F9BB3' }}><FiGrid /></span>),
  getItem(<p className='text-sm font-medium'>Создать бронь</p>, '4', <span style={{ fontSize: '20px', color: '#8F9BB3' }}><FiPlus /></span>),
  getItem(<p className='text-sm font-medium'>Список броней</p>, '5', <span style={{ fontSize: '20px', color: '#8F9BB3' }}><AiOutlineCalendar /></span>),
  getItem(<p className='text-sm font-medium'>Прием и размещение</p>, 'sub1', <span style={{ fontSize: '20px', color: '#8F9BB3' }}><FiLayout /></span>, [
    getItem(<p className="text-sm font-medium">Шахматка</p>, '6',),
    getItem(<p className="text-sm font-medium">Создать бронь</p>, '7',),
    getItem(<p className="text-sm font-medium">Список броней</p>, '8'),
  ]),
  getItem(<p className='text-sm font-medium'>Расчеты</p>, '9', <span style={{ fontSize: '20px', color: '#8F9BB3' }}><FiCreditCard /></span>),
  getItem(<p className='text-sm font-medium'>Служба отеля</p>, 'sub2', <span style={{ fontSize: '20px', color: '#8F9BB3' }}><FiUsers /></span>, [
    getItem(<p className="text-sm font-medium">Шахматка</p>, '10',),
    getItem(<p className="text-sm font-medium">Создать бронь</p>, '11',),
    getItem(<p className="text-sm font-medium">Список броней</p>, '12'),
  ]),
  getItem(<p className='text-sm font-medium'>Отчеты</p>, 'sub3', <span style={{ fontSize: '20px', color: '#8F9BB3' }}><FiTrendingUp /></span>, [
    getItem(<p className="text-sm font-medium">Шахматка</p>, '13',),
    getItem(<p className="text-sm font-medium">Создать бронь</p>, '14',),
    getItem(<p className="text-sm font-medium">Список броней</p>, '15'),
  ])
  , getItem(<p className='text-sm font-medium'>Финансовая аналитика</p>, 'sub4', <span style={{ fontSize: '20px', color: '#8F9BB3' }}><FiBarChart2 /></span>, [
    getItem(<p className="text-sm font-medium">Шахматка</p>, '16',),
    getItem(<p className="text-sm font-medium">Создать бронь</p>, '17',),
    getItem(<p className="text-sm font-medium">Список броней</p>, '18'),
  ]),
  getItem(<p className='text-sm font-medium'>Настройка</p>, 'sub5', <span style={{ fontSize: '20px', color: '#8F9BB3' }}><FiSettings /></span>, [
    getItem(<p className="text-sm font-medium">Ваш объект</p>, '19',),
    getItem(<p className="text-sm font-medium">Номерной фонд</p>, '20',),
    getItem(<p className="text-sm font-medium">Тарифы и цены</p>, '21'),
  ]),





];


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (

    <Layout aria-required className="min-h-[90vh] flex align-center gap-44 bg-[#d6d6d6]">
      <Sider className='min-h-[95vh]  ' trigger={null} collapsible collapsed={collapsed} setCollapsed={setCollapsed}>
        <Menu

          className='h-full min-h-[95vh] flex-[0_0_350px] w-[350px] border px-2 py-3'
          mode="inline"
          defaultSelectedKeys={['19']}
          items={items}

        />

      </Sider>
      <Content className="w-full bg-[#ffffff]  py-8 px-6" theme="light" >
        <form >
        <h2 className="text-lg font-bold text-[#8F9BB3]">Регистрация</h2>
        <div className="w-full mt-8 flex items-center gap-6">
          <div className="flex flex-col gap-8 flex-1 ">
            <div className="flex flex-col gap-2">
              <label className="uppercase text-bold text-[#8992A3] text-xs">тип</label>
              <Select 
                
                className=" "
                placeholder="К какой из категорий ниже больше всего подходит ваш объект?"
                options={[
                  {
                    value: 'jack',
                    label: 'Jack',
                  },
                  {
                    value: 'lucy',
                    label: 'Lucy',
                  },
                  {
                    value: 'Yiminghe',
                    label: 'yiminghe',
                  }
                ]}
              />

            </div>
            <div className="flex flex-col gap-2 w-full ">
              <label className="uppercase text-bold text-[#8992A3] text-xs">звездность</label>
              <Select
                className=" "
                placeholder="Сколько звезд у вашей гостиницы?"
                options={[
                  {
                    value: 'jack',
                    label: 'Jack',
                  },
                  {
                    value: 'lucy',
                    label: 'Lucy',
                  },
                  {
                    value: 'Yiminghe',
                    label: 'yiminghe',
                  }
                ]}
              />

            </div>
          </div>
          <div className="flex flex-col gap-8  flex-1">
            <div className="flex flex-col gap-2 w-full ">
              <label className="uppercase text-bold text-[#8992A3] text-xs">
                название
              </label>
              <Input placeholder="Как называется ваша гостиница?" />
            </div>
            <div className="flex flex-col gap-2 w-full ">
              <label className="uppercase text-bold text-[#8992A3] text-xs">
                адрес
              </label>
              <Input placeholder="Где находится ваша гостиница?" />
            </div>
          </div>
        </div>
        <div className="grid grid-flow-row grid-cols-3 gap-6 mt-8">
          <div className="flex flex-col gap-2">
            <label className="uppercase text-[#8992A3] text-xs text-bold">номер телефона</label>
            <Input placeholder="Введите номер телефона" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="uppercase text-[#8992A3] text-xs text-bold">дополнительный номер телефона</label>
            <Input placeholder="Введите дополнительный номер телефона" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="uppercase text-[#8992A3] text-xs text-bold">Факс</label>
            <Input placeholder="Введите факс " />
          </div>
          <div className="flex flex-col gap-2">
            <label className="uppercase text-[#8992A3] text-xs text-bold">Email</label>
            <Input placeholder="Введите email" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="uppercase text-[#8992A3] text-xs text-bold">Email отдела бронирования</label>
            <Input placeholder="Введите email" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="uppercase text-[#8992A3] text-xs text-bold">ПОЧТОВЫЙ ИНДЕКС</label>
            <Input placeholder="Введите индекс" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="uppercase text-[#8992A3] text-xs text-bold">вРЕМЯ ЗАЕЗДА</label>
            <Input placeholder="Например: 08:00" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="uppercase text-[#8992A3] text-xs text-bold">Время выезда</label>
            <Input placeholder="Например: 18:00" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="uppercase text-[#8992A3] text-xs text-bold">форма оплаты</label>

            <Select
              className=" "
              placeholder="Какие способы оплаты вы принимаете?"
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'Yiminghe',
                  label: 'yiminghe',
                }
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-8">
          <div className="flex flex-col gap-2">
            <label className="uppercase text-[#8992A3] text-xs text-bold">услуги гостиницы</label>
            <Select
              className=" "
              placeholder="Какие услуги предоставляет ваша гостиница клиентам?"
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'Yiminghe',
                  label: 'yiminghe',
                }
              ]}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="uppercase text-[#8992A3] text-xs text-bold">ближайшие достопримечательности и развлекательные центры</label>
            <Select
              className=" "
              placeholder="Ближайшие достопримечательности и развлекательные центры "
              options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'Yiminghe',
                  label: 'yiminghe',
                }
              ]}
            />
          </div>
        </div>
        <div className="flex items-center mt-8 gap-20 ">
          <div className=" relative flex flex-col items-center justify-center gap-2 px-18 py-35  w-3/12  bg-[#EDF1F7] border border-dashed border-[#E4E9F2] rounded-lg">
            <span className="text-[#8F9BB3] text-5xl text-bold"><AiOutlineCamera /></span>
            <strong className="text-[#8F9BB3] text-xs">Загрузить фото</strong>
            <input type="file" className="file_input" />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <h2 className="text-[#8992A3] text-lg text-bold uppercase ">фотогалерея гостиницы</h2>
            <p className="flex align-center gap-2 text-[#3366FF] text-xs text-normal"><img src={exclamation} alt="exclamation" /> Максимальный размер файла 10МБ. Поддерживаются изображения форматов .jpeg, .png, .gif.</p>
          </div>
          <div className="flex gap-6">
            <button className="uppercase font-bold text-[#2E3A59]">отменить</button>
            <button className="uppercase font-bold text-[#fff] py-3 px-4 bg-[#3366FF] rounded-lg ">Сохранить</button>
          </div>
        </div>
        </form>

      </Content>
    </Layout>

  )
}



export default Sidebar
