import React from 'react';
const LABEL_11595 = 'component_11595';
export function Component11595({ value = 11595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11595, 'data-value': derived.doubled }, children);
}
export default Component11595;
