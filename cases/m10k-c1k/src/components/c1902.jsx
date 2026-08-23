import React from 'react';
const LABEL_1902 = 'component_1902';
export function Component1902({ value = 1902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1902, 'data-value': derived.doubled }, children);
}
export default Component1902;
