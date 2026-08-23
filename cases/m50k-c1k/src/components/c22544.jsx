import React from 'react';
const LABEL_22544 = 'component_22544';
export function Component22544({ value = 22544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22544, 'data-value': derived.doubled }, children);
}
export default Component22544;
