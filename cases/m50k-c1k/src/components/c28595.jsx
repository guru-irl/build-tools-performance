import React from 'react';
const LABEL_28595 = 'component_28595';
export function Component28595({ value = 28595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28595, 'data-value': derived.doubled }, children);
}
export default Component28595;
