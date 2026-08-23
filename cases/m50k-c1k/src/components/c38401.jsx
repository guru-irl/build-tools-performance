import React from 'react';
const LABEL_38401 = 'component_38401';
export function Component38401({ value = 38401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38401, 'data-value': derived.doubled }, children);
}
export default Component38401;
