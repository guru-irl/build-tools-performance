import React from 'react';
const LABEL_23846 = 'component_23846';
export function Component23846({ value = 23846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23846, 'data-value': derived.doubled }, children);
}
export default Component23846;
