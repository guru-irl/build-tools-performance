import React from 'react';
const LABEL_26309 = 'component_26309';
export function Component26309({ value = 26309, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26309, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26309, 'data-value': derived.doubled }, children);
}
export default Component26309;
