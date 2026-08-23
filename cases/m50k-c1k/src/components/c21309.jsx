import React from 'react';
const LABEL_21309 = 'component_21309';
export function Component21309({ value = 21309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21309, 'data-value': derived.doubled }, children);
}
export default Component21309;
