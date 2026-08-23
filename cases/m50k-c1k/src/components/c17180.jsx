import React from 'react';
const LABEL_17180 = 'component_17180';
export function Component17180({ value = 17180, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17180, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17180, 'data-value': derived.doubled }, children);
}
export default Component17180;
