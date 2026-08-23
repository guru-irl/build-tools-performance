import React from 'react';
const LABEL_28451 = 'component_28451';
export function Component28451({ value = 28451, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28451, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28451, 'data-value': derived.doubled }, children);
}
export default Component28451;
