import React from 'react';
const LABEL_3465 = 'component_3465';
export function Component3465({ value = 3465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3465, 'data-value': derived.doubled }, children);
}
export default Component3465;
