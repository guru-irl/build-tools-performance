import React from 'react';
const LABEL_40855 = 'component_40855';
export function Component40855({ value = 40855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40855, 'data-value': derived.doubled }, children);
}
export default Component40855;
