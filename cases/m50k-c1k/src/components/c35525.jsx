import React from 'react';
const LABEL_35525 = 'component_35525';
export function Component35525({ value = 35525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35525, 'data-value': derived.doubled }, children);
}
export default Component35525;
