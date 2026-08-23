import React from 'react';
const LABEL_42657 = 'component_42657';
export function Component42657({ value = 42657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42657, 'data-value': derived.doubled }, children);
}
export default Component42657;
