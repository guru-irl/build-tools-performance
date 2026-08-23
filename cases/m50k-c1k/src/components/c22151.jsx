import React from 'react';
const LABEL_22151 = 'component_22151';
export function Component22151({ value = 22151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22151, 'data-value': derived.doubled }, children);
}
export default Component22151;
