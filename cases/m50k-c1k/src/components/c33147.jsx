import React from 'react';
const LABEL_33147 = 'component_33147';
export function Component33147({ value = 33147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33147, 'data-value': derived.doubled }, children);
}
export default Component33147;
