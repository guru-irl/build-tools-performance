import React from 'react';
const LABEL_25856 = 'component_25856';
export function Component25856({ value = 25856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25856, 'data-value': derived.doubled }, children);
}
export default Component25856;
