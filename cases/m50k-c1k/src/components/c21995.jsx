import React from 'react';
const LABEL_21995 = 'component_21995';
export function Component21995({ value = 21995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21995, 'data-value': derived.doubled }, children);
}
export default Component21995;
