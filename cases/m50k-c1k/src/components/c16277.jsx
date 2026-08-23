import React from 'react';
const LABEL_16277 = 'component_16277';
export function Component16277({ value = 16277, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16277, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16277, 'data-value': derived.doubled }, children);
}
export default Component16277;
