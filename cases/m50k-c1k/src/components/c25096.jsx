import React from 'react';
const LABEL_25096 = 'component_25096';
export function Component25096({ value = 25096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25096, 'data-value': derived.doubled }, children);
}
export default Component25096;
