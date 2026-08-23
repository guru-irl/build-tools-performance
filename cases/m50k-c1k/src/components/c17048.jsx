import React from 'react';
const LABEL_17048 = 'component_17048';
export function Component17048({ value = 17048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17048, 'data-value': derived.doubled }, children);
}
export default Component17048;
