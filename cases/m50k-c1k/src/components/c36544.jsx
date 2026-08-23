import React from 'react';
const LABEL_36544 = 'component_36544';
export function Component36544({ value = 36544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36544, 'data-value': derived.doubled }, children);
}
export default Component36544;
