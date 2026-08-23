import React from 'react';
const LABEL_34504 = 'component_34504';
export function Component34504({ value = 34504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34504, 'data-value': derived.doubled }, children);
}
export default Component34504;
