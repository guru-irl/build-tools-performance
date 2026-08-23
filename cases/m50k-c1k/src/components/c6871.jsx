import React from 'react';
const LABEL_6871 = 'component_6871';
export function Component6871({ value = 6871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6871, 'data-value': derived.doubled }, children);
}
export default Component6871;
