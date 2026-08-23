import React from 'react';
const LABEL_34639 = 'component_34639';
export function Component34639({ value = 34639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34639, 'data-value': derived.doubled }, children);
}
export default Component34639;
