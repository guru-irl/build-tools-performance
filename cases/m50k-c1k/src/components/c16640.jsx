import React from 'react';
const LABEL_16640 = 'component_16640';
export function Component16640({ value = 16640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16640, 'data-value': derived.doubled }, children);
}
export default Component16640;
