import React from 'react';
const LABEL_14639 = 'component_14639';
export function Component14639({ value = 14639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14639, 'data-value': derived.doubled }, children);
}
export default Component14639;
