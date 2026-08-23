import React from 'react';
const LABEL_22079 = 'component_22079';
export function Component22079({ value = 22079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22079, 'data-value': derived.doubled }, children);
}
export default Component22079;
