import React from 'react';
const LABEL_17082 = 'component_17082';
export function Component17082({ value = 17082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17082, 'data-value': derived.doubled }, children);
}
export default Component17082;
