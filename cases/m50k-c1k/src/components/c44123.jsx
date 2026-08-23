import React from 'react';
const LABEL_44123 = 'component_44123';
export function Component44123({ value = 44123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44123, 'data-value': derived.doubled }, children);
}
export default Component44123;
