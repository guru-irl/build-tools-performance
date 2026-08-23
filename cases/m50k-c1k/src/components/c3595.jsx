import React from 'react';
const LABEL_3595 = 'component_3595';
export function Component3595({ value = 3595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3595, 'data-value': derived.doubled }, children);
}
export default Component3595;
