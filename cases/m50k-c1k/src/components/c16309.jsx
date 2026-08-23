import React from 'react';
const LABEL_16309 = 'component_16309';
export function Component16309({ value = 16309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16309, 'data-value': derived.doubled }, children);
}
export default Component16309;
