import React from 'react';
const LABEL_32854 = 'component_32854';
export function Component32854({ value = 32854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32854, 'data-value': derived.doubled }, children);
}
export default Component32854;
