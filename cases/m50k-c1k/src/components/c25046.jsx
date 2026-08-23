import React from 'react';
const LABEL_25046 = 'component_25046';
export function Component25046({ value = 25046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25046, 'data-value': derived.doubled }, children);
}
export default Component25046;
