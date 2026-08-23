import React from 'react';
const LABEL_18606 = 'component_18606';
export function Component18606({ value = 18606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18606, 'data-value': derived.doubled }, children);
}
export default Component18606;
