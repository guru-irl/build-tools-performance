import React from 'react';
const LABEL_29098 = 'component_29098';
export function Component29098({ value = 29098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29098, 'data-value': derived.doubled }, children);
}
export default Component29098;
