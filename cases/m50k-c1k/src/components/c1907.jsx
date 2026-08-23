import React from 'react';
const LABEL_1907 = 'component_1907';
export function Component1907({ value = 1907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1907, 'data-value': derived.doubled }, children);
}
export default Component1907;
