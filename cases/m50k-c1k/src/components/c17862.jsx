import React from 'react';
const LABEL_17862 = 'component_17862';
export function Component17862({ value = 17862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17862, 'data-value': derived.doubled }, children);
}
export default Component17862;
