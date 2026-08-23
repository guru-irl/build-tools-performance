import React from 'react';
const LABEL_33269 = 'component_33269';
export function Component33269({ value = 33269, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33269, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33269, 'data-value': derived.doubled }, children);
}
export default Component33269;
