import React from 'react';
const LABEL_26829 = 'component_26829';
export function Component26829({ value = 26829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26829, 'data-value': derived.doubled }, children);
}
export default Component26829;
