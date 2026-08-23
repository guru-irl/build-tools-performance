import React from 'react';
const LABEL_7657 = 'component_7657';
export function Component7657({ value = 7657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7657, 'data-value': derived.doubled }, children);
}
export default Component7657;
