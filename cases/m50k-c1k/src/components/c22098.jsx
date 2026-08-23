import React from 'react';
const LABEL_22098 = 'component_22098';
export function Component22098({ value = 22098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22098, 'data-value': derived.doubled }, children);
}
export default Component22098;
