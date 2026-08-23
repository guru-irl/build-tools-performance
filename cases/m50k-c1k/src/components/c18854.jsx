import React from 'react';
const LABEL_18854 = 'component_18854';
export function Component18854({ value = 18854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18854, 'data-value': derived.doubled }, children);
}
export default Component18854;
