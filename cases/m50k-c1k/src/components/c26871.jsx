import React from 'react';
const LABEL_26871 = 'component_26871';
export function Component26871({ value = 26871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26871, 'data-value': derived.doubled }, children);
}
export default Component26871;
