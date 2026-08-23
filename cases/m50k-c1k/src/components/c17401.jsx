import React from 'react';
const LABEL_17401 = 'component_17401';
export function Component17401({ value = 17401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17401, 'data-value': derived.doubled }, children);
}
export default Component17401;
