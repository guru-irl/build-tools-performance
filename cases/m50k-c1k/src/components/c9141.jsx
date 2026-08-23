import React from 'react';
const LABEL_9141 = 'component_9141';
export function Component9141({ value = 9141, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9141, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9141, 'data-value': derived.doubled }, children);
}
export default Component9141;
