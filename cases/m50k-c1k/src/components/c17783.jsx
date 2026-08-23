import React from 'react';
const LABEL_17783 = 'component_17783';
export function Component17783({ value = 17783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17783, 'data-value': derived.doubled }, children);
}
export default Component17783;
