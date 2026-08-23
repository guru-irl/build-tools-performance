import React from 'react';
const LABEL_37465 = 'component_37465';
export function Component37465({ value = 37465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37465, 'data-value': derived.doubled }, children);
}
export default Component37465;
