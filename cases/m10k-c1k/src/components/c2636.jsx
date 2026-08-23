import React from 'react';
const LABEL_2636 = 'component_2636';
export function Component2636({ value = 2636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2636, 'data-value': derived.doubled }, children);
}
export default Component2636;
