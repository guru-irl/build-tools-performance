import React from 'react';
const LABEL_23854 = 'component_23854';
export function Component23854({ value = 23854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23854, 'data-value': derived.doubled }, children);
}
export default Component23854;
