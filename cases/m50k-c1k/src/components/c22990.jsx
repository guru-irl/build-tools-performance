import React from 'react';
const LABEL_22990 = 'component_22990';
export function Component22990({ value = 22990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22990, 'data-value': derived.doubled }, children);
}
export default Component22990;
