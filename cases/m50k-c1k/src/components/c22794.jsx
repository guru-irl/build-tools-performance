import React from 'react';
const LABEL_22794 = 'component_22794';
export function Component22794({ value = 22794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22794, 'data-value': derived.doubled }, children);
}
export default Component22794;
