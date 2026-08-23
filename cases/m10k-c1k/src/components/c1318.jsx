import React from 'react';
const LABEL_1318 = 'component_1318';
export function Component1318({ value = 1318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1318, 'data-value': derived.doubled }, children);
}
export default Component1318;
