import React from 'react';
const LABEL_17867 = 'component_17867';
export function Component17867({ value = 17867, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17867, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17867, 'data-value': derived.doubled }, children);
}
export default Component17867;
