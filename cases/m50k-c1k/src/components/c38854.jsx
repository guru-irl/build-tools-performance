import React from 'react';
const LABEL_38854 = 'component_38854';
export function Component38854({ value = 38854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38854, 'data-value': derived.doubled }, children);
}
export default Component38854;
