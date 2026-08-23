import React from 'react';
const LABEL_10854 = 'component_10854';
export function Component10854({ value = 10854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10854, 'data-value': derived.doubled }, children);
}
export default Component10854;
