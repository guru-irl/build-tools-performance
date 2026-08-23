import React from 'react';
const LABEL_38409 = 'component_38409';
export function Component38409({ value = 38409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38409, 'data-value': derived.doubled }, children);
}
export default Component38409;
