import React from 'react';
const LABEL_26395 = 'component_26395';
export function Component26395({ value = 26395, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26395, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26395, 'data-value': derived.doubled }, children);
}
export default Component26395;
