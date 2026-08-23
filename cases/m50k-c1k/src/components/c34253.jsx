import React from 'react';
const LABEL_34253 = 'component_34253';
export function Component34253({ value = 34253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34253, 'data-value': derived.doubled }, children);
}
export default Component34253;
