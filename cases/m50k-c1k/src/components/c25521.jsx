import React from 'react';
const LABEL_25521 = 'component_25521';
export function Component25521({ value = 25521, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25521, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25521, 'data-value': derived.doubled }, children);
}
export default Component25521;
