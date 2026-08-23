import React from 'react';
const LABEL_33253 = 'component_33253';
export function Component33253({ value = 33253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33253, 'data-value': derived.doubled }, children);
}
export default Component33253;
