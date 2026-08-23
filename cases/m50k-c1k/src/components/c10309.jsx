import React from 'react';
const LABEL_10309 = 'component_10309';
export function Component10309({ value = 10309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10309, 'data-value': derived.doubled }, children);
}
export default Component10309;
