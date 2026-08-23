import React from 'react';
const LABEL_21797 = 'component_21797';
export function Component21797({ value = 21797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21797, 'data-value': derived.doubled }, children);
}
export default Component21797;
