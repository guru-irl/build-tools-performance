import React from 'react';
const LABEL_28229 = 'component_28229';
export function Component28229({ value = 28229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28229, 'data-value': derived.doubled }, children);
}
export default Component28229;
