import React from 'react';
const LABEL_38919 = 'component_38919';
export function Component38919({ value = 38919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38919, 'data-value': derived.doubled }, children);
}
export default Component38919;
