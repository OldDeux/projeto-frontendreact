import React from 'react'
import { FiltersStyle, Form } from './FiltersStyle'


const Filters = (props) => {

    const { minFilter, onChangeMinFilter, maxFilter, onChangeMaxFilter, searchFilter, onChangeSearchFilter } = props

    return (
        <>
            <FiltersStyle>
                <h2>Filters</h2>
                <Form>
                    <label for=""><b>Buscar por nome:</b></label>
                    <input type={'search'} value={searchFilter} onChange={onChangeSearchFilter} />
                    <label for=""><b>Valor mínimo:</b></label>
                    <input value={minFilter} onChange={onChangeMinFilter} />
                    <label for=""><b>Valor máximo</b></label>
                    <input value={maxFilter} onChange={onChangeMaxFilter} />
                </Form>
            </FiltersStyle>
        </>
    )
}

export default Filters