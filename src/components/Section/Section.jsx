import PropTypes from 'prop-types';
import { Title } from './Section.styled';

function Section({ title, children }) {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
}

export default Section;

PropTypes.Section = {
  title: PropTypes.string,
  children: PropTypes.func.isRequired,
};
