import React from 'react';
const LABEL_37309 = 'component_37309';
export function Component37309({ value = 37309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37309, 'data-value': derived.doubled }, children);
}
export default Component37309;
