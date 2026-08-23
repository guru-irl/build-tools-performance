import React from 'react';
const LABEL_33429 = 'component_33429';
export function Component33429({ value = 33429, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33429, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33429, 'data-value': derived.doubled }, children);
}
export default Component33429;
