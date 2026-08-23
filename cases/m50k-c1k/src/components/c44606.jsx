import React from 'react';
const LABEL_44606 = 'component_44606';
export function Component44606({ value = 44606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44606, 'data-value': derived.doubled }, children);
}
export default Component44606;
