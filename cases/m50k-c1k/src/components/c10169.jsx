import React from 'react';
const LABEL_10169 = 'component_10169';
export function Component10169({ value = 10169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10169, 'data-value': derived.doubled }, children);
}
export default Component10169;
