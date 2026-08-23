import React from 'react';
const LABEL_11919 = 'component_11919';
export function Component11919({ value = 11919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11919, 'data-value': derived.doubled }, children);
}
export default Component11919;
