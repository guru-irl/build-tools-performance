import React from 'react';
const LABEL_36309 = 'component_36309';
export function Component36309({ value = 36309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36309, 'data-value': derived.doubled }, children);
}
export default Component36309;
