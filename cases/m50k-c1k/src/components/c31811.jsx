import React from 'react';
const LABEL_31811 = 'component_31811';
export function Component31811({ value = 31811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31811, 'data-value': derived.doubled }, children);
}
export default Component31811;
