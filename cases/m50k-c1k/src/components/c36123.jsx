import React from 'react';
const LABEL_36123 = 'component_36123';
export function Component36123({ value = 36123, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36123, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36123, 'data-value': derived.doubled }, children);
}
export default Component36123;
