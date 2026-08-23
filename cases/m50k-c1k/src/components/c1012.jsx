import React from 'react';
const LABEL_1012 = 'component_1012';
export function Component1012({ value = 1012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1012, 'data-value': derived.doubled }, children);
}
export default Component1012;
