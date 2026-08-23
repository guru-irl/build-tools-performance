import React from 'react';
const LABEL_43514 = 'component_43514';
export function Component43514({ value = 43514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43514, 'data-value': derived.doubled }, children);
}
export default Component43514;
