import React from 'react';
const LABEL_29169 = 'component_29169';
export function Component29169({ value = 29169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29169, 'data-value': derived.doubled }, children);
}
export default Component29169;
