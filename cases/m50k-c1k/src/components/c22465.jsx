import React from 'react';
const LABEL_22465 = 'component_22465';
export function Component22465({ value = 22465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22465, 'data-value': derived.doubled }, children);
}
export default Component22465;
