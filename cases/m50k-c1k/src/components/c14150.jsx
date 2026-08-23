import React from 'react';
const LABEL_14150 = 'component_14150';
export function Component14150({ value = 14150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14150, 'data-value': derived.doubled }, children);
}
export default Component14150;
