import React from 'react';
const LABEL_1027 = 'component_1027';
export function Component1027({ value = 1027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1027, 'data-value': derived.doubled }, children);
}
export default Component1027;
