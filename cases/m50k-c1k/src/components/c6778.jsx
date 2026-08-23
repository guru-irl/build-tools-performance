import React from 'react';
const LABEL_6778 = 'component_6778';
export function Component6778({ value = 6778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6778, 'data-value': derived.doubled }, children);
}
export default Component6778;
