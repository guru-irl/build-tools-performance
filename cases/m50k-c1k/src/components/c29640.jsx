import React from 'react';
const LABEL_29640 = 'component_29640';
export function Component29640({ value = 29640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29640, 'data-value': derived.doubled }, children);
}
export default Component29640;
