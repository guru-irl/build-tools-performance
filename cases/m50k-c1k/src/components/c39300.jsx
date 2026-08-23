import React from 'react';
const LABEL_39300 = 'component_39300';
export function Component39300({ value = 39300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39300, 'data-value': derived.doubled }, children);
}
export default Component39300;
