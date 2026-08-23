import React from 'react';
const LABEL_37491 = 'component_37491';
export function Component37491({ value = 37491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37491, 'data-value': derived.doubled }, children);
}
export default Component37491;
