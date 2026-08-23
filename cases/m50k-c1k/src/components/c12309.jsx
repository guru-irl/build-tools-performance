import React from 'react';
const LABEL_12309 = 'component_12309';
export function Component12309({ value = 12309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12309, 'data-value': derived.doubled }, children);
}
export default Component12309;
