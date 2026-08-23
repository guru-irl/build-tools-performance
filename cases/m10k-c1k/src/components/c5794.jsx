import React from 'react';
const LABEL_5794 = 'component_5794';
export function Component5794({ value = 5794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5794, 'data-value': derived.doubled }, children);
}
export default Component5794;
