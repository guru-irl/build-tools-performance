import React from 'react';
const LABEL_5854 = 'component_5854';
export function Component5854({ value = 5854, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5854, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5854, 'data-value': derived.doubled }, children);
}
export default Component5854;
