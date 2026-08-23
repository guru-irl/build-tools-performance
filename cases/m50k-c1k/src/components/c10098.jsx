import React from 'react';
const LABEL_10098 = 'component_10098';
export function Component10098({ value = 10098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10098, 'data-value': derived.doubled }, children);
}
export default Component10098;
