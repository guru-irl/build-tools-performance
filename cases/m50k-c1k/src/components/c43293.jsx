import React from 'react';
const LABEL_43293 = 'component_43293';
export function Component43293({ value = 43293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43293, 'data-value': derived.doubled }, children);
}
export default Component43293;
