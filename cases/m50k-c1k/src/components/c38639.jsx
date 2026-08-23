import React from 'react';
const LABEL_38639 = 'component_38639';
export function Component38639({ value = 38639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38639, 'data-value': derived.doubled }, children);
}
export default Component38639;
