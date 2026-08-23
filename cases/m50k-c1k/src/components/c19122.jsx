import React from 'react';
const LABEL_19122 = 'component_19122';
export function Component19122({ value = 19122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19122, 'data-value': derived.doubled }, children);
}
export default Component19122;
