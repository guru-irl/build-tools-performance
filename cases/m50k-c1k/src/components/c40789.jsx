import React from 'react';
const LABEL_40789 = 'component_40789';
export function Component40789({ value = 40789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40789, 'data-value': derived.doubled }, children);
}
export default Component40789;
