import React from 'react';
const LABEL_657 = 'component_657';
export function Component657({ value = 657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_657, 'data-value': derived.doubled }, children);
}
export default Component657;
