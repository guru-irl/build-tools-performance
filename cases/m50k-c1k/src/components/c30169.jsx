import React from 'react';
const LABEL_30169 = 'component_30169';
export function Component30169({ value = 30169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30169, 'data-value': derived.doubled }, children);
}
export default Component30169;
