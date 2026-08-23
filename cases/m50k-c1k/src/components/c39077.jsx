import React from 'react';
const LABEL_39077 = 'component_39077';
export function Component39077({ value = 39077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39077, 'data-value': derived.doubled }, children);
}
export default Component39077;
