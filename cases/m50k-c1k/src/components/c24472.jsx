import React from 'react';
const LABEL_24472 = 'component_24472';
export function Component24472({ value = 24472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24472, 'data-value': derived.doubled }, children);
}
export default Component24472;
