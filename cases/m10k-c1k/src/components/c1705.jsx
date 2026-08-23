import React from 'react';
const LABEL_1705 = 'component_1705';
export function Component1705({ value = 1705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1705, 'data-value': derived.doubled }, children);
}
export default Component1705;
