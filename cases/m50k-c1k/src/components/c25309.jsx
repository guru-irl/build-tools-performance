import React from 'react';
const LABEL_25309 = 'component_25309';
export function Component25309({ value = 25309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25309, 'data-value': derived.doubled }, children);
}
export default Component25309;
