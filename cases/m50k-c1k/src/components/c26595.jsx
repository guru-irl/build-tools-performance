import React from 'react';
const LABEL_26595 = 'component_26595';
export function Component26595({ value = 26595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26595, 'data-value': derived.doubled }, children);
}
export default Component26595;
