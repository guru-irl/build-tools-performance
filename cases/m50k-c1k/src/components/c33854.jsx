import React from 'react';
const LABEL_33854 = 'component_33854';
export function Component33854({ value = 33854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33854, 'data-value': derived.doubled }, children);
}
export default Component33854;
