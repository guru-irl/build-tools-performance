import React from 'react';
const LABEL_22595 = 'component_22595';
export function Component22595({ value = 22595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22595, 'data-value': derived.doubled }, children);
}
export default Component22595;
