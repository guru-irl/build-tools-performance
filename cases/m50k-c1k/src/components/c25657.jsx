import React from 'react';
const LABEL_25657 = 'component_25657';
export function Component25657({ value = 25657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25657, 'data-value': derived.doubled }, children);
}
export default Component25657;
