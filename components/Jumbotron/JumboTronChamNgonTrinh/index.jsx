import React from 'react';
import PropTypes from 'prop-types';
import styles from "./JumbotronChamNgonTrinh.module.scss"

JumbotronChamNgonTrinh.propTypes = {

};

function JumbotronChamNgonTrinh(props)
{
    return (
        <section className={styles.container}>
            <h2>
                CHÂM NGÔN TRỊNH
            </h2>
            <div>
                <img src="/images/chamngontrinh.png" alt="Trịnh Công Sơn" />
                <p>
                    Có những ngày tuyệt vọng cùng cực, tôi và cuộc đời đã tha thứ cho nhau. Từ buổi con người sống quá rẻ rúng, tôi biết rằng vinh quang chỉ là điều dối trá. Tôi không còn gì để chiêm bái ngoài nỗi tuyệt vọng và lòng bao dung. Hãy đi đến tận cùng của tuyệt vọng để thấy tuyệt vọng cũng đẹp như một bông hoa.
                </p>
            </div>
        </section>
    );
}

export default JumbotronChamNgonTrinh;