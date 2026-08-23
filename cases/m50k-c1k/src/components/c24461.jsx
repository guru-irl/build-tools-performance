import React from 'react';
const LABEL_24461 = 'component_24461';
export function Component24461({ value = 24461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24461, 'data-value': derived.doubled }, children);
}
export default Component24461;
