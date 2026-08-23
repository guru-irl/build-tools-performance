import React from 'react';
const LABEL_11131 = 'component_11131';
export function Component11131({ value = 11131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11131, 'data-value': derived.doubled }, children);
}
export default Component11131;
