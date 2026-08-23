import React from 'react';
const LABEL_17797 = 'component_17797';
export function Component17797({ value = 17797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17797, 'data-value': derived.doubled }, children);
}
export default Component17797;
