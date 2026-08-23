import React from 'react';
const LABEL_22309 = 'component_22309';
export function Component22309({ value = 22309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22309, 'data-value': derived.doubled }, children);
}
export default Component22309;
