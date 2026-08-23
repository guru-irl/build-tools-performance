import React from 'react';
const LABEL_17196 = 'component_17196';
export function Component17196({ value = 17196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17196, 'data-value': derived.doubled }, children);
}
export default Component17196;
