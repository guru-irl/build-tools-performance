import React from 'react';
const LABEL_31744 = 'component_31744';
export function Component31744({ value = 31744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31744, 'data-value': derived.doubled }, children);
}
export default Component31744;
