import React from 'react';
const LABEL_39544 = 'component_39544';
export function Component39544({ value = 39544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39544, 'data-value': derived.doubled }, children);
}
export default Component39544;
