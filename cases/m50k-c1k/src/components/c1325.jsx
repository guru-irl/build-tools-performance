import React from 'react';
const LABEL_1325 = 'component_1325';
export function Component1325({ value = 1325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1325, 'data-value': derived.doubled }, children);
}
export default Component1325;
