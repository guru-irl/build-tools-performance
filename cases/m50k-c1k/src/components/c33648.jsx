import React from 'react';
const LABEL_33648 = 'component_33648';
export function Component33648({ value = 33648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33648, 'data-value': derived.doubled }, children);
}
export default Component33648;
