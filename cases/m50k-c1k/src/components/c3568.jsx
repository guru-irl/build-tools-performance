import React from 'react';
const LABEL_3568 = 'component_3568';
export function Component3568({ value = 3568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3568, 'data-value': derived.doubled }, children);
}
export default Component3568;
