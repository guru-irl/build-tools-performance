import React from 'react';
const LABEL_25557 = 'component_25557';
export function Component25557({ value = 25557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25557, 'data-value': derived.doubled }, children);
}
export default Component25557;
