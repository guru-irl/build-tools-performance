import React from 'react';
const LABEL_30172 = 'component_30172';
export function Component30172({ value = 30172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30172, 'data-value': derived.doubled }, children);
}
export default Component30172;
