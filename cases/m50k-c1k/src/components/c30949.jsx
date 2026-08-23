import React from 'react';
const LABEL_30949 = 'component_30949';
export function Component30949({ value = 30949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30949, 'data-value': derived.doubled }, children);
}
export default Component30949;
