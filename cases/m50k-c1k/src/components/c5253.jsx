import React from 'react';
const LABEL_5253 = 'component_5253';
export function Component5253({ value = 5253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5253, 'data-value': derived.doubled }, children);
}
export default Component5253;
