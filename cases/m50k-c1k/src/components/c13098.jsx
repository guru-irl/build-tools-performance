import React from 'react';
const LABEL_13098 = 'component_13098';
export function Component13098({ value = 13098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13098, 'data-value': derived.doubled }, children);
}
export default Component13098;
