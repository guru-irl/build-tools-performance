import React from 'react';
const LABEL_15190 = 'component_15190';
export function Component15190({ value = 15190, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15190, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15190, 'data-value': derived.doubled }, children);
}
export default Component15190;
