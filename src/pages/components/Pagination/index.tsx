import { Box, Button, Stack } from "@chakra-ui/react";
import generatePageArray from "../../utils/generatePagesArray";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountRegisters: number;
  registersPerPages?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const sinblingsCount = 1;

export function Pagination({
  registersPerPages= 10,
  totalCountRegisters,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountRegisters / registersPerPages);

  //pagination logic

  const previosPages =
    currentPage > 1
      ? generatePageArray(currentPage - 1 - sinblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePageArray(
          currentPage,
          Math.min(currentPage + sinblingsCount, lastPage)
        )
      : [];
  //pagination logic

  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong>-<strong>10</strong> de <strong> 100</strong>
      </Box>
      <Stack direction={["column", "row"]} spacing="2">
        {/* showing previous pages */}
        {previosPages.length > 0 &&
          previosPages.map((page) => {
            return <PaginationItem number={page} key={page} />;
          })}

        {/* current pages */}
        <PaginationItem number={currentPage} isCurrent />

        {/* showing nextpages */}
        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return <PaginationItem number={page} key={page} />;
          })}
      </Stack>
    </Stack>
  );
}
