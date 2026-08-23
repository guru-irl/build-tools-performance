import React from 'react';
const LABEL_12136 = 'component_12136';
export function Component12136({ value = 12136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12136, 'data-value': derived.doubled }, children);
}
export default Component12136;
