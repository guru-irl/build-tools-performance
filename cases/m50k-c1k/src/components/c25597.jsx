import React from 'react';
const LABEL_25597 = 'component_25597';
export function Component25597({ value = 25597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25597, 'data-value': derived.doubled }, children);
}
export default Component25597;
