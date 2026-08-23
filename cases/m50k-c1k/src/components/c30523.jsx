import React from 'react';
const LABEL_30523 = 'component_30523';
export function Component30523({ value = 30523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30523, 'data-value': derived.doubled }, children);
}
export default Component30523;
