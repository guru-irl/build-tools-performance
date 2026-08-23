import React from 'react';
const LABEL_36169 = 'component_36169';
export function Component36169({ value = 36169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36169, 'data-value': derived.doubled }, children);
}
export default Component36169;
