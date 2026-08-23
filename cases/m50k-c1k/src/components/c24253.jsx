import React from 'react';
const LABEL_24253 = 'component_24253';
export function Component24253({ value = 24253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24253, 'data-value': derived.doubled }, children);
}
export default Component24253;
