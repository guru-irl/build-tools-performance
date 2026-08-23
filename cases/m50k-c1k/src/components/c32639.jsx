import React from 'react';
const LABEL_32639 = 'component_32639';
export function Component32639({ value = 32639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32639, 'data-value': derived.doubled }, children);
}
export default Component32639;
