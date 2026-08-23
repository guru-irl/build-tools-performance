import React from 'react';
const LABEL_2559 = 'component_2559';
export function Component2559({ value = 2559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2559, 'data-value': derived.doubled }, children);
}
export default Component2559;
