import React from 'react';
const LABEL_46639 = 'component_46639';
export function Component46639({ value = 46639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46639, 'data-value': derived.doubled }, children);
}
export default Component46639;
