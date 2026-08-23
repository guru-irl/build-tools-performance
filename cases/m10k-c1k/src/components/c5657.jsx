import React from 'react';
const LABEL_5657 = 'component_5657';
export function Component5657({ value = 5657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5657, 'data-value': derived.doubled }, children);
}
export default Component5657;
