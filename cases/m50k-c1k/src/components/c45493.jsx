import React from 'react';
const LABEL_45493 = 'component_45493';
export function Component45493({ value = 45493, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45493, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45493, 'data-value': derived.doubled }, children);
}
export default Component45493;
