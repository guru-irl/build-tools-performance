import React from 'react';
const LABEL_33694 = 'component_33694';
export function Component33694({ value = 33694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33694, 'data-value': derived.doubled }, children);
}
export default Component33694;
