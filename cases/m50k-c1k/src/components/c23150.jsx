import React from 'react';
const LABEL_23150 = 'component_23150';
export function Component23150({ value = 23150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23150, 'data-value': derived.doubled }, children);
}
export default Component23150;
