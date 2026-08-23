import React from 'react';
const LABEL_16700 = 'component_16700';
export function Component16700({ value = 16700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16700, 'data-value': derived.doubled }, children);
}
export default Component16700;
