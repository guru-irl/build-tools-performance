import React from 'react';
const LABEL_17671 = 'component_17671';
export function Component17671({ value = 17671, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17671, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17671, 'data-value': derived.doubled }, children);
}
export default Component17671;
