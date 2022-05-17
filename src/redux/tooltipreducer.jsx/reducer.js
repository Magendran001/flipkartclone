import tooltipsubcategories from "./action";
const init = { tooltipsubcategories: [{ title: "maggi" }] };

const categoriesreducer = (state = init, { payload, type }) => {

    switch (type) {
        case tooltipsubcategories:


            return ({ ...state, tooltipsubcategories: payload })

        default:
            return { ...state }

    }


}
export default categoriesreducer