import React from 'react';
const LABEL_4639 = 'component_4639';
export function Component4639({ value = 4639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4639, 'data-value': derived.doubled }, children);
}
export default Component4639;
