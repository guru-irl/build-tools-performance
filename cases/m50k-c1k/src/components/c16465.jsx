import React from 'react';
const LABEL_16465 = 'component_16465';
export function Component16465({ value = 16465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16465, 'data-value': derived.doubled }, children);
}
export default Component16465;
