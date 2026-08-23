import React from 'react';
const LABEL_36657 = 'component_36657';
export function Component36657({ value = 36657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36657, 'data-value': derived.doubled }, children);
}
export default Component36657;
