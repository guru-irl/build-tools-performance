import React from 'react';
const LABEL_23720 = 'component_23720';
export function Component23720({ value = 23720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23720, 'data-value': derived.doubled }, children);
}
export default Component23720;
