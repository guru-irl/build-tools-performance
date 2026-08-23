import React from 'react';
const LABEL_15309 = 'component_15309';
export function Component15309({ value = 15309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15309, 'data-value': derived.doubled }, children);
}
export default Component15309;
