import React from 'react';
const LABEL_33806 = 'component_33806';
export function Component33806({ value = 33806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33806, 'data-value': derived.doubled }, children);
}
export default Component33806;
