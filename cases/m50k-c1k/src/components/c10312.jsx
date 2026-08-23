import React from 'react';
const LABEL_10312 = 'component_10312';
export function Component10312({ value = 10312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10312, 'data-value': derived.doubled }, children);
}
export default Component10312;
