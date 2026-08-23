import React from 'react';
const LABEL_35098 = 'component_35098';
export function Component35098({ value = 35098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35098, 'data-value': derived.doubled }, children);
}
export default Component35098;
