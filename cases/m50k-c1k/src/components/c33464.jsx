import React from 'react';
const LABEL_33464 = 'component_33464';
export function Component33464({ value = 33464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33464, 'data-value': derived.doubled }, children);
}
export default Component33464;
