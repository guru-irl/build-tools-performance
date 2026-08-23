import React from 'react';
const LABEL_13461 = 'component_13461';
export function Component13461({ value = 13461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13461, 'data-value': derived.doubled }, children);
}
export default Component13461;
