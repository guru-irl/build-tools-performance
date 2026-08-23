import React from 'react';
const LABEL_18632 = 'component_18632';
export function Component18632({ value = 18632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18632, 'data-value': derived.doubled }, children);
}
export default Component18632;
