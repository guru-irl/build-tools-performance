import React from 'react';
const LABEL_3657 = 'component_3657';
export function Component3657({ value = 3657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3657, 'data-value': derived.doubled }, children);
}
export default Component3657;
