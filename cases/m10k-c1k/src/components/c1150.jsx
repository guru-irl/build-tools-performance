import React from 'react';
const LABEL_1150 = 'component_1150';
export function Component1150({ value = 1150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1150, 'data-value': derived.doubled }, children);
}
export default Component1150;
