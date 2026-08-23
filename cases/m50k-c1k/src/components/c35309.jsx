import React from 'react';
const LABEL_35309 = 'component_35309';
export function Component35309({ value = 35309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35309, 'data-value': derived.doubled }, children);
}
export default Component35309;
