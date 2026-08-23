import React from 'react';
const LABEL_5309 = 'component_5309';
export function Component5309({ value = 5309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5309, 'data-value': derived.doubled }, children);
}
export default Component5309;
