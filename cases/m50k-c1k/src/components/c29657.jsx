import React from 'react';
const LABEL_29657 = 'component_29657';
export function Component29657({ value = 29657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29657, 'data-value': derived.doubled }, children);
}
export default Component29657;
