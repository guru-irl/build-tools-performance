import React from 'react';
const LABEL_25527 = 'component_25527';
export function Component25527({ value = 25527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25527, 'data-value': derived.doubled }, children);
}
export default Component25527;
