import React from 'react';
const LABEL_12238 = 'component_12238';
export function Component12238({ value = 12238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12238, 'data-value': derived.doubled }, children);
}
export default Component12238;
