import React from 'react';
const LABEL_33313 = 'component_33313';
export function Component33313({ value = 33313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33313, 'data-value': derived.doubled }, children);
}
export default Component33313;
