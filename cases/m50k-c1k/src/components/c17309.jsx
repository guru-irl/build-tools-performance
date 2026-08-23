import React from 'react';
const LABEL_17309 = 'component_17309';
export function Component17309({ value = 17309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17309, 'data-value': derived.doubled }, children);
}
export default Component17309;
