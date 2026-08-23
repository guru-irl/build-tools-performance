import React from 'react';
const LABEL_26174 = 'component_26174';
export function Component26174({ value = 26174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26174, 'data-value': derived.doubled }, children);
}
export default Component26174;
