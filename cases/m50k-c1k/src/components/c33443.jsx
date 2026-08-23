import React from 'react';
const LABEL_33443 = 'component_33443';
export function Component33443({ value = 33443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33443, 'data-value': derived.doubled }, children);
}
export default Component33443;
