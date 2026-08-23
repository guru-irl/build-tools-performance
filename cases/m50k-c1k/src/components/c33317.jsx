import React from 'react';
const LABEL_33317 = 'component_33317';
export function Component33317({ value = 33317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33317, 'data-value': derived.doubled }, children);
}
export default Component33317;
