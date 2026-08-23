import React from 'react';
const LABEL_25749 = 'component_25749';
export function Component25749({ value = 25749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25749, 'data-value': derived.doubled }, children);
}
export default Component25749;
