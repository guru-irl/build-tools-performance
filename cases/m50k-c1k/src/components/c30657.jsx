import React from 'react';
const LABEL_30657 = 'component_30657';
export function Component30657({ value = 30657, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30657, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30657, 'data-value': derived.doubled }, children);
}
export default Component30657;
