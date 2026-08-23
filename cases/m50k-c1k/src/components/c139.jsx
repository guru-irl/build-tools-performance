import React from 'react';
const LABEL_139 = 'component_139';
export function Component139({ value = 139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_139, 'data-value': derived.doubled }, children);
}
export default Component139;
