import React from 'react';
const LABEL_46854 = 'component_46854';
export function Component46854({ value = 46854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46854, 'data-value': derived.doubled }, children);
}
export default Component46854;
