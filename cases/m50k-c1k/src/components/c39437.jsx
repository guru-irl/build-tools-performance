import React from 'react';
const LABEL_39437 = 'component_39437';
export function Component39437({ value = 39437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39437, 'data-value': derived.doubled }, children);
}
export default Component39437;
