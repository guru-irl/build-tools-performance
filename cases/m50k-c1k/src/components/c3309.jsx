import React from 'react';
const LABEL_3309 = 'component_3309';
export function Component3309({ value = 3309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3309, 'data-value': derived.doubled }, children);
}
export default Component3309;
