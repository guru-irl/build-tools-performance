import React from 'react';
const LABEL_14169 = 'component_14169';
export function Component14169({ value = 14169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14169, 'data-value': derived.doubled }, children);
}
export default Component14169;
