import React from 'react';
const LABEL_14919 = 'component_14919';
export function Component14919({ value = 14919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14919, 'data-value': derived.doubled }, children);
}
export default Component14919;
