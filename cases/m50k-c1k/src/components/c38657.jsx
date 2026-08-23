import React from 'react';
const LABEL_38657 = 'component_38657';
export function Component38657({ value = 38657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38657, 'data-value': derived.doubled }, children);
}
export default Component38657;
