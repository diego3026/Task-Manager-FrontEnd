import './TasksPrincipal.css'
import { HiOutlineBookOpen } from "react-icons/hi";
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Tasks from '../Tasks/Tasks';

const { Sider } = Layout;


const TasksPrincipal = () => {
    return (
        <div className="tasks_principal">
            <Layout>
                <Sider width={80} style={{ background: "white" }}>
                    <div className='side__items'>
                        <div className="items-icon">
                            <HiOutlineBookOpen style={{ fontSize: 'x-large', color: 'var(--white)'}} />
                        </div>
                    </div>
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        background: 'var(--grayLight)'
                    }}
                >
                    <Tasks/> 
                </Content>
            </Layout>
        </div>

    )
}

export default TasksPrincipal;