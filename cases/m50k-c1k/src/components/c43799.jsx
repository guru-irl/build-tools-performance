import React from 'react';
const LABEL_43799 = 'component_43799';
export function Component43799({ value = 43799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43799, 'data-value': derived.doubled }, children);
}
export default Component43799;
