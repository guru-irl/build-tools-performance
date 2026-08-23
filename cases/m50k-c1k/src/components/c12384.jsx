import React from 'react';
const LABEL_12384 = 'component_12384';
export function Component12384({ value = 12384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12384, 'data-value': derived.doubled }, children);
}
export default Component12384;
