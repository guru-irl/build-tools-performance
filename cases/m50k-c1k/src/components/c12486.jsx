import React from 'react';
const LABEL_12486 = 'component_12486';
export function Component12486({ value = 12486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12486, 'data-value': derived.doubled }, children);
}
export default Component12486;
