import React from 'react';
const LABEL_13309 = 'component_13309';
export function Component13309({ value = 13309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13309, 'data-value': derived.doubled }, children);
}
export default Component13309;
