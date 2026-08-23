import React from 'react';
const LABEL_25253 = 'component_25253';
export function Component25253({ value = 25253, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25253, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25253, 'data-value': derived.doubled }, children);
}
export default Component25253;
