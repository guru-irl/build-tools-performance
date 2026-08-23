import React from 'react';
const LABEL_6854 = 'component_6854';
export function Component6854({ value = 6854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6854, 'data-value': derived.doubled }, children);
}
export default Component6854;
