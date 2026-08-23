import React from 'react';
const LABEL_1275 = 'component_1275';
export function Component1275({ value = 1275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1275, 'data-value': derived.doubled }, children);
}
export default Component1275;
