import React from 'react';
const LABEL_465 = 'component_465';
export function Component465({ value = 465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_465, 'data-value': derived.doubled }, children);
}
export default Component465;
