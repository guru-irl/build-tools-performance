import React from 'react';
const LABEL_18681 = 'component_18681';
export function Component18681({ value = 18681, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18681, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18681, 'data-value': derived.doubled }, children);
}
export default Component18681;
