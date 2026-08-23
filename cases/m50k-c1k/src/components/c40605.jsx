import React from 'react';
const LABEL_40605 = 'component_40605';
export function Component40605({ value = 40605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40605, 'data-value': derived.doubled }, children);
}
export default Component40605;
