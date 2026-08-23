import React from 'react';
const LABEL_22331 = 'component_22331';
export function Component22331({ value = 22331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22331, 'data-value': derived.doubled }, children);
}
export default Component22331;
