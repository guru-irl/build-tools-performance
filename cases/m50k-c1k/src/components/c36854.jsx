import React from 'react';
const LABEL_36854 = 'component_36854';
export function Component36854({ value = 36854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36854, 'data-value': derived.doubled }, children);
}
export default Component36854;
