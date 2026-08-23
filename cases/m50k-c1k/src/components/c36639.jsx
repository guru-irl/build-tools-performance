import React from 'react';
const LABEL_36639 = 'component_36639';
export function Component36639({ value = 36639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36639, 'data-value': derived.doubled }, children);
}
export default Component36639;
