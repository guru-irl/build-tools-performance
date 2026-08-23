import React from 'react';
const LABEL_10630 = 'component_10630';
export function Component10630({ value = 10630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10630, 'data-value': derived.doubled }, children);
}
export default Component10630;
