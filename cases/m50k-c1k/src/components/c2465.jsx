import React from 'react';
const LABEL_2465 = 'component_2465';
export function Component2465({ value = 2465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2465, 'data-value': derived.doubled }, children);
}
export default Component2465;
