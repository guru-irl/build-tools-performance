import React from 'react';
const LABEL_7291 = 'component_7291';
export function Component7291({ value = 7291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7291, 'data-value': derived.doubled }, children);
}
export default Component7291;
