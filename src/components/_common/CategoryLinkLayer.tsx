import { CategoryInfoType } from "@typing/category"

import { Grid } from "@components/_atoms"
import CategoryLink from "./CategoryLink"

interface CategoryLinkLayerProps {
    categoryInfoArray: CategoryInfoType[]
    displayCategoryPageLinkBtn?: boolean
}
function CategoryLinkLayer({
    categoryInfoArray,
    displayCategoryPageLinkBtn = false,
}: CategoryLinkLayerProps) {
    return (
        <Grid col="grid-cols-2" gap="gap-4" mdCol="md:grid-cols-3">
            {categoryInfoArray.map((categoryInfo) => (
                <CategoryLink {...categoryInfo} key={categoryInfo.category} />
            ))}
            {displayCategoryPageLinkBtn && (
                <CategoryLink
                    category="더 많은 카테고리"
                    categoryUrl="/category"
                    color="#de3587"
                    description="이곳을 누르면 다양한 카테고리를 한눈에 볼 수 있어요."
                    emoji="📮"
                />
            )}
        </Grid>
    )
}

export default CategoryLinkLayer
