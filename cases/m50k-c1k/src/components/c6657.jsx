import React from 'react';
const LABEL_6657 = 'component_6657';
export function Component6657({ value = 6657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6657, 'data-value': derived.doubled }, children);
}
export default Component6657;
