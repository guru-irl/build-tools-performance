import React from 'react';
const LABEL_21274 = 'component_21274';
export function Component21274({ value = 21274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21274, 'data-value': derived.doubled }, children);
}
export default Component21274;
