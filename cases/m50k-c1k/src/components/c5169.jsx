import React from 'react';
const LABEL_5169 = 'component_5169';
export function Component5169({ value = 5169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5169, 'data-value': derived.doubled }, children);
}
export default Component5169;
