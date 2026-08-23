import React from 'react';
const LABEL_17952 = 'component_17952';
export function Component17952({ value = 17952, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17952, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17952, 'data-value': derived.doubled }, children);
}
export default Component17952;
