import React from 'react';
import Board from 'react-ui-kanban';
// import './KanBanBoardMain.css';

function KanBanBoardMain() {
    const data = {
        lanes: [
            {
                id: 'lane1',
                title: 'Planned Tasks',
                label: '3/3',
                cards: [
                    { id: 'card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: true },
                    { id: 'card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: { sha: 'be312a1' } },
                ]
            },
            {
                id: 'lane2',
                title: 'In Progress',
                label: '',
                cards: [
                    { id: 'card3', title: 'Design Website', description: 'Create layout and assets', label: '1 hour', draggable: true },
                    { id: 'card4', title: 'Review Code', description: 'Check for issues and improvements', label: '45 mins', metadata: { sha: 'd9a7b5c' } },
                ]
            },
            {
                id: 'lane3',
                title: 'Completed',
                label: '',
                cards: [
                    { id: 'card5', title: 'Set Up Environment', description: 'Install necessary tools', label: '20 mins', draggable: true },
                    { id: 'card6', title: 'Update Documentation', description: 'Add recent changes', label: '15 mins', metadata: { sha: 'e5c8d1f' } },
                ]
            }
        ]
    };

    return (
        <div className='KanBanBoardMain'>
            <Board data={data} />
        </div>
    );
}

export default KanBanBoardMain;
