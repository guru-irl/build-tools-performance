import React from 'react';
const LABEL_45854 = 'component_45854';
export function Component45854({ value = 45854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45854, 'data-value': derived.doubled }, children);
}
export default Component45854;
