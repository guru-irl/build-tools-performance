import React from 'react';
const LABEL_33472 = 'component_33472';
export function Component33472({ value = 33472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33472, 'data-value': derived.doubled }, children);
}
export default Component33472;
