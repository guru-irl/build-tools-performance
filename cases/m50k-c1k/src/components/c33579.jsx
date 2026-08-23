import React from 'react';
const LABEL_33579 = 'component_33579';
export function Component33579({ value = 33579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33579, 'data-value': derived.doubled }, children);
}
export default Component33579;
