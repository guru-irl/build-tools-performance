import React from 'react';
const LABEL_1854 = 'component_1854';
export function Component1854({ value = 1854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1854, 'data-value': derived.doubled }, children);
}
export default Component1854;
