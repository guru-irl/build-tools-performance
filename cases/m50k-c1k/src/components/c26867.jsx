import React from 'react';
const LABEL_26867 = 'component_26867';
export function Component26867({ value = 26867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26867, 'data-value': derived.doubled }, children);
}
export default Component26867;
