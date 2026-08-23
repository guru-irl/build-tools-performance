import React from 'react';
const LABEL_10650 = 'component_10650';
export function Component10650({ value = 10650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10650, 'data-value': derived.doubled }, children);
}
export default Component10650;
