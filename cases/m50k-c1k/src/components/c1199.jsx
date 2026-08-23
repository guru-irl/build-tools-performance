import React from 'react';
const LABEL_1199 = 'component_1199';
export function Component1199({ value = 1199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1199, 'data-value': derived.doubled }, children);
}
export default Component1199;
