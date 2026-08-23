import React from 'react';
const LABEL_6639 = 'component_6639';
export function Component6639({ value = 6639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6639, 'data-value': derived.doubled }, children);
}
export default Component6639;
