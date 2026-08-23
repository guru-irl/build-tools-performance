import React from 'react';
const LABEL_33278 = 'component_33278';
export function Component33278({ value = 33278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33278, 'data-value': derived.doubled }, children);
}
export default Component33278;
