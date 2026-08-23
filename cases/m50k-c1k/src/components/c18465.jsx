import React from 'react';
const LABEL_18465 = 'component_18465';
export function Component18465({ value = 18465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18465, 'data-value': derived.doubled }, children);
}
export default Component18465;
