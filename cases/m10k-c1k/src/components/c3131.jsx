import React from 'react';
const LABEL_3131 = 'component_3131';
export function Component3131({ value = 3131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3131, 'data-value': derived.doubled }, children);
}
export default Component3131;
