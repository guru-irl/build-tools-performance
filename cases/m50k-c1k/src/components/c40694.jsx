import React from 'react';
const LABEL_40694 = 'component_40694';
export function Component40694({ value = 40694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40694, 'data-value': derived.doubled }, children);
}
export default Component40694;
