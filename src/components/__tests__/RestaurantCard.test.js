import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
import { withTopLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";

test("should render Restaurant Card component with props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Dindigul Thalappakatti");
  expect(name).toBeInTheDocument();
});

test("should render Restaurant Card component with promoted label", () => {
  const DummyCard = () => <div>Restaurant Content</div>;
  const TopLabelCard = withTopLabel(DummyCard);

  render(<TopLabelCard />);

  const topLabel = screen.getByText("Top Rated");
  expect(topLabel).toBeInTheDocument();
});
