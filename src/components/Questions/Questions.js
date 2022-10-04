import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='question'>

            {/* question 1 */}
            <div>
                <h2>Q.How does react work?</h2>
                <p><b>Answer:</b> React divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering the code. React uses a declarative paradigm that makes it easier to reason abput the application and aims to be both efficient and flexible.It designs simple views for each state in the application and efficiently updates and render the right component when the data changes.
                </p>

            </div>
            {/* quesition 2 */}
            <div>
                <h2>Q. What are the difference between Props and State?</h2>
                <p><b>Answer:</b> We can pass the data between the components using Props and State. But here are some differences between these two.</p>
                <p><b>Props:</b></p>Props are known as properties. It can be used to pass data from one component to another.
                <p><b>State:</b> State represents parts of an application that can change.Each component can have its state.</p>
                <p>Main differences between them are -- in Props, data can pass from one component to another but in case of State the data is passed within the component only. Also, Props are immutable which means it cannot be modified. On the other hand, State is mutable.</p>
                <p>Props are read only,but Stateis both read and write.</p>
                <p>Props can be used with State and functional component however State can be used only with the State component. </p>

            </div>
            {/* question 3 */}
            <div>
                <h2>Q.Besides fetching the data what are the other uses of useeffect in react?</h2>
                <p><b>Answer: </b> The useEffect Hook allows to perform side effects in components.Some examples of side effects are: fetching data, directly updating the DOM, and timers.
                    UseEffect accepts two arguments. The second argument is optional.It runs on every render. That means that when the count changes, a render happens, which then triggers another effect.So,it is essential to include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.</p>
                <p>There are some other cases UseEffects is used such as--</p>
                <p>Running once on mount: fetch API data.</p>
                <p> Running on state change: validating input field.Running once on mount: fetch API data.</p>
                <p>Running on state change: validating input field.</p>
                <p> Running on state change: live filtering.</p>
                <p>Running on state change: trigger animation on new array value.</p>
                <p>Running on props change: update paragraph list on fetched API data update.</p>
            </div>


        </div>
    );
};

export default Questions;