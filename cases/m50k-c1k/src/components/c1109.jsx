import React from 'react';
const LABEL_1109 = 'component_1109';
export function Component1109({ value = 1109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1109, 'data-value': derived.doubled }, children);
}
export default Component1109;
