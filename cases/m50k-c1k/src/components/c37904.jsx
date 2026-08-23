import React from 'react';
const LABEL_37904 = 'component_37904';
export function Component37904({ value = 37904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37904, 'data-value': derived.doubled }, children);
}
export default Component37904;
