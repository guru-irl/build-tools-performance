import React from 'react';
const LABEL_12681 = 'component_12681';
export function Component12681({ value = 12681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12681, 'data-value': derived.doubled }, children);
}
export default Component12681;
