import React from 'react';
const LABEL_11544 = 'component_11544';
export function Component11544({ value = 11544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11544, 'data-value': derived.doubled }, children);
}
export default Component11544;
