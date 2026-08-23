import React from 'react';
const LABEL_15639 = 'component_15639';
export function Component15639({ value = 15639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15639, 'data-value': derived.doubled }, children);
}
export default Component15639;
