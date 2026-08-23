import React from 'react';
const LABEL_169 = 'component_169';
export function Component169({ value = 169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_169, 'data-value': derived.doubled }, children);
}
export default Component169;
