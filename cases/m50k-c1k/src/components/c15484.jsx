import React from 'react';
const LABEL_15484 = 'component_15484';
export function Component15484({ value = 15484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15484, 'data-value': derived.doubled }, children);
}
export default Component15484;
