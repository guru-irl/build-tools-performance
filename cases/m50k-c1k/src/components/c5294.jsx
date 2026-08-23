import React from 'react';
const LABEL_5294 = 'component_5294';
export function Component5294({ value = 5294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5294, 'data-value': derived.doubled }, children);
}
export default Component5294;
