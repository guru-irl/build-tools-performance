import React from 'react';
const LABEL_10595 = 'component_10595';
export function Component10595({ value = 10595, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10595, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10595, 'data-value': derived.doubled }, children);
}
export default Component10595;
