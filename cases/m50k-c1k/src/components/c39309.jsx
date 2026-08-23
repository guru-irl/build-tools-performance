import React from 'react';
const LABEL_39309 = 'component_39309';
export function Component39309({ value = 39309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39309, 'data-value': derived.doubled }, children);
}
export default Component39309;
