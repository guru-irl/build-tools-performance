import React from 'react';
const LABEL_15917 = 'component_15917';
export function Component15917({ value = 15917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15917, 'data-value': derived.doubled }, children);
}
export default Component15917;
