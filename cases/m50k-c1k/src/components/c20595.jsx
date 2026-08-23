import React from 'react';
const LABEL_20595 = 'component_20595';
export function Component20595({ value = 20595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20595, 'data-value': derived.doubled }, children);
}
export default Component20595;
