import React from 'react';
const LABEL_44789 = 'component_44789';
export function Component44789({ value = 44789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44789, 'data-value': derived.doubled }, children);
}
export default Component44789;
