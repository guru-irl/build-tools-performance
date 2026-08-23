import React from 'react';
const LABEL_39269 = 'component_39269';
export function Component39269({ value = 39269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39269, 'data-value': derived.doubled }, children);
}
export default Component39269;
