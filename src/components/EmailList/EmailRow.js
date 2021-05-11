import { Checkbox, IconButton, Popover } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import React from 'react'
import './EmailRow.css'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useHistory } from 'react-router-dom';
import { selectMail } from '../../features/mailSlice';

function EmailRow({title, subject, description, id, time}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({
            id,
            title,
            subject,
            description,
            time,
        })
        );
        history.push('/mail')
    };

    console.log(selectMail)

    return (
        <div onClick = {openMail} className = 'emailrow'>
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>

                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>

            </div>

            <div className="emailRow__title">
                {title}
            </div>

            <div className="emailRow__message">
                <h4>{subject}{" "}
                    <span className="emailRow__description">-
                        {description}
                    </span>
                </h4>
            </div>

            <p className="emailRow__time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
