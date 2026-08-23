import React from 'react';
const LABEL_25800 = 'component_25800';
export function Component25800({ value = 25800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25800, 'data-value': derived.doubled }, children);
}
export default Component25800;
