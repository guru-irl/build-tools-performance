import React from 'react';
const LABEL_25792 = 'component_25792';
export function Component25792({ value = 25792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25792, 'data-value': derived.doubled }, children);
}
export default Component25792;
