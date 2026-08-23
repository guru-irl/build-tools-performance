import React from 'react';
const LABEL_13657 = 'component_13657';
export function Component13657({ value = 13657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13657, 'data-value': derived.doubled }, children);
}
export default Component13657;
