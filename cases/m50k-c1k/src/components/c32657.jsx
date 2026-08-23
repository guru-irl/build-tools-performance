import React from 'react';
const LABEL_32657 = 'component_32657';
export function Component32657({ value = 32657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32657, 'data-value': derived.doubled }, children);
}
export default Component32657;
