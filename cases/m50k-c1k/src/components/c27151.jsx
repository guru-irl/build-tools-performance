import React from 'react';
const LABEL_27151 = 'component_27151';
export function Component27151({ value = 27151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27151, 'data-value': derived.doubled }, children);
}
export default Component27151;
