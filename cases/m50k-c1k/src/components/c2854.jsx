import React from 'react';
const LABEL_2854 = 'component_2854';
export function Component2854({ value = 2854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2854, 'data-value': derived.doubled }, children);
}
export default Component2854;
