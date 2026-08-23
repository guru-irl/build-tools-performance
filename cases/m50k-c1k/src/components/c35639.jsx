import React from 'react';
const LABEL_35639 = 'component_35639';
export function Component35639({ value = 35639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35639, 'data-value': derived.doubled }, children);
}
export default Component35639;
