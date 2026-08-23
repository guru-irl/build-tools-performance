import React from 'react';
const LABEL_43098 = 'component_43098';
export function Component43098({ value = 43098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43098, 'data-value': derived.doubled }, children);
}
export default Component43098;
