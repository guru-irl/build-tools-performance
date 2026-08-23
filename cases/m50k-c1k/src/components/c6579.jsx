import React from 'react';
const LABEL_6579 = 'component_6579';
export function Component6579({ value = 6579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6579, 'data-value': derived.doubled }, children);
}
export default Component6579;
