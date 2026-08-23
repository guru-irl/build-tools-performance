import React from 'react';
const LABEL_36648 = 'component_36648';
export function Component36648({ value = 36648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36648, 'data-value': derived.doubled }, children);
}
export default Component36648;
