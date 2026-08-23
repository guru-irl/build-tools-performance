import React from 'react';
const LABEL_13919 = 'component_13919';
export function Component13919({ value = 13919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13919, 'data-value': derived.doubled }, children);
}
export default Component13919;
