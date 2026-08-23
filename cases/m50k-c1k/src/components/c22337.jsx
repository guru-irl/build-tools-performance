import React from 'react';
const LABEL_22337 = 'component_22337';
export function Component22337({ value = 22337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22337, 'data-value': derived.doubled }, children);
}
export default Component22337;
