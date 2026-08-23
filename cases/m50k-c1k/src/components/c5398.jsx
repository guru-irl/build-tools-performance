import React from 'react';
const LABEL_5398 = 'component_5398';
export function Component5398({ value = 5398, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5398, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5398, 'data-value': derived.doubled }, children);
}
export default Component5398;
