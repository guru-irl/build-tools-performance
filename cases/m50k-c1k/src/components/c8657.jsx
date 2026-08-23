import React from 'react';
const LABEL_8657 = 'component_8657';
export function Component8657({ value = 8657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8657, 'data-value': derived.doubled }, children);
}
export default Component8657;
