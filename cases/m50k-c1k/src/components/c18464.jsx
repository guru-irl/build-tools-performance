import React from 'react';
const LABEL_18464 = 'component_18464';
export function Component18464({ value = 18464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18464, 'data-value': derived.doubled }, children);
}
export default Component18464;
