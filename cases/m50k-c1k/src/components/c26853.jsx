import React from 'react';
const LABEL_26853 = 'component_26853';
export function Component26853({ value = 26853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26853, 'data-value': derived.doubled }, children);
}
export default Component26853;
