import React from 'react';
const LABEL_13854 = 'component_13854';
export function Component13854({ value = 13854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13854, 'data-value': derived.doubled }, children);
}
export default Component13854;
