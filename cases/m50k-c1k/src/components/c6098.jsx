import React from 'react';
const LABEL_6098 = 'component_6098';
export function Component6098({ value = 6098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6098, 'data-value': derived.doubled }, children);
}
export default Component6098;
