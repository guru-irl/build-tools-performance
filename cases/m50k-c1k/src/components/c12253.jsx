import React from 'react';
const LABEL_12253 = 'component_12253';
export function Component12253({ value = 12253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12253, 'data-value': derived.doubled }, children);
}
export default Component12253;
