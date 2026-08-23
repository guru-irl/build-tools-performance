import React from 'react';
const LABEL_13265 = 'component_13265';
export function Component13265({ value = 13265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13265, 'data-value': derived.doubled }, children);
}
export default Component13265;
