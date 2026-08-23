import React from 'react';
const LABEL_25504 = 'component_25504';
export function Component25504({ value = 25504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25504, 'data-value': derived.doubled }, children);
}
export default Component25504;
