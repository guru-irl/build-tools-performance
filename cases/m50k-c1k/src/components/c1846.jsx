import React from 'react';
const LABEL_1846 = 'component_1846';
export function Component1846({ value = 1846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1846, 'data-value': derived.doubled }, children);
}
export default Component1846;
