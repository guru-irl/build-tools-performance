import React from 'react';
const LABEL_5150 = 'component_5150';
export function Component5150({ value = 5150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5150, 'data-value': derived.doubled }, children);
}
export default Component5150;
