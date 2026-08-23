import React from 'react';
const LABEL_26757 = 'component_26757';
export function Component26757({ value = 26757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26757, 'data-value': derived.doubled }, children);
}
export default Component26757;
