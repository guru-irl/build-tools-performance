import React from 'react';
const LABEL_39595 = 'component_39595';
export function Component39595({ value = 39595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39595, 'data-value': derived.doubled }, children);
}
export default Component39595;
