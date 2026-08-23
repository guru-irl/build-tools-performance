import React from 'react';
const LABEL_13595 = 'component_13595';
export function Component13595({ value = 13595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13595, 'data-value': derived.doubled }, children);
}
export default Component13595;
