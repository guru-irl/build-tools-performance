import React from 'react';
const LABEL_1169 = 'component_1169';
export function Component1169({ value = 1169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1169, 'data-value': derived.doubled }, children);
}
export default Component1169;
