import React from 'react';
const LABEL_21099 = 'component_21099';
export function Component21099({ value = 21099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21099, 'data-value': derived.doubled }, children);
}
export default Component21099;
