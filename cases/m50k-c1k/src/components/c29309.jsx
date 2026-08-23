import React from 'react';
const LABEL_29309 = 'component_29309';
export function Component29309({ value = 29309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29309, 'data-value': derived.doubled }, children);
}
export default Component29309;
