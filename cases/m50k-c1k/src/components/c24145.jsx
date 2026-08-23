import React from 'react';
const LABEL_24145 = 'component_24145';
export function Component24145({ value = 24145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24145, 'data-value': derived.doubled }, children);
}
export default Component24145;
