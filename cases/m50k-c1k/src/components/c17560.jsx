import React from 'react';
const LABEL_17560 = 'component_17560';
export function Component17560({ value = 17560, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17560, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17560, 'data-value': derived.doubled }, children);
}
export default Component17560;
