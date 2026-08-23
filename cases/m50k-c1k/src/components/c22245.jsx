import React from 'react';
const LABEL_22245 = 'component_22245';
export function Component22245({ value = 22245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22245, 'data-value': derived.doubled }, children);
}
export default Component22245;
