import React from 'react';
const LABEL_13953 = 'component_13953';
export function Component13953({ value = 13953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13953, 'data-value': derived.doubled }, children);
}
export default Component13953;
