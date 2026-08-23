import React from 'react';
const LABEL_23030 = 'component_23030';
export function Component23030({ value = 23030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23030, 'data-value': derived.doubled }, children);
}
export default Component23030;
