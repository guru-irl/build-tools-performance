import React from 'react';
const LABEL_18657 = 'component_18657';
export function Component18657({ value = 18657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18657, 'data-value': derived.doubled }, children);
}
export default Component18657;
