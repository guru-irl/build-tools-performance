import React from 'react';
const LABEL_32309 = 'component_32309';
export function Component32309({ value = 32309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32309, 'data-value': derived.doubled }, children);
}
export default Component32309;
