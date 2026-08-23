import React from 'react';
const LABEL_17595 = 'component_17595';
export function Component17595({ value = 17595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17595, 'data-value': derived.doubled }, children);
}
export default Component17595;
