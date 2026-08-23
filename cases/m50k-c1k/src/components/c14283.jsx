import React from 'react';
const LABEL_14283 = 'component_14283';
export function Component14283({ value = 14283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14283, 'data-value': derived.doubled }, children);
}
export default Component14283;
