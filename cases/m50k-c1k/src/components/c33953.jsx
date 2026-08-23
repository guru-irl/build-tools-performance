import React from 'react';
const LABEL_33953 = 'component_33953';
export function Component33953({ value = 33953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33953, 'data-value': derived.doubled }, children);
}
export default Component33953;
