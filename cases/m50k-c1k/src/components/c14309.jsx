import React from 'react';
const LABEL_14309 = 'component_14309';
export function Component14309({ value = 14309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14309, 'data-value': derived.doubled }, children);
}
export default Component14309;
