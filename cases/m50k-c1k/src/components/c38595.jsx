import React from 'react';
const LABEL_38595 = 'component_38595';
export function Component38595({ value = 38595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38595, 'data-value': derived.doubled }, children);
}
export default Component38595;
