import React from 'react';
const LABEL_17905 = 'component_17905';
export function Component17905({ value = 17905, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17905, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17905, 'data-value': derived.doubled }, children);
}
export default Component17905;
