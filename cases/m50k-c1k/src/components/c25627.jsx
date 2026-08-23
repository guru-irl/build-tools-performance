import React from 'react';
const LABEL_25627 = 'component_25627';
export function Component25627({ value = 25627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25627, 'data-value': derived.doubled }, children);
}
export default Component25627;
