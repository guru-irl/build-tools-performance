import React from 'react';
const LABEL_33544 = 'component_33544';
export function Component33544({ value = 33544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33544, 'data-value': derived.doubled }, children);
}
export default Component33544;
