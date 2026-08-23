import React from 'react';
const LABEL_33277 = 'component_33277';
export function Component33277({ value = 33277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33277, 'data-value': derived.doubled }, children);
}
export default Component33277;
