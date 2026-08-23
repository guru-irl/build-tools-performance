import React from 'react';
const LABEL_37253 = 'component_37253';
export function Component37253({ value = 37253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37253, 'data-value': derived.doubled }, children);
}
export default Component37253;
