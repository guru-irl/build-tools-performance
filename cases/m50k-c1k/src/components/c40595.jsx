import React from 'react';
const LABEL_40595 = 'component_40595';
export function Component40595({ value = 40595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40595, 'data-value': derived.doubled }, children);
}
export default Component40595;
