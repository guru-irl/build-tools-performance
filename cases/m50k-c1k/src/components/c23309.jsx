import React from 'react';
const LABEL_23309 = 'component_23309';
export function Component23309({ value = 23309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23309, 'data-value': derived.doubled }, children);
}
export default Component23309;
