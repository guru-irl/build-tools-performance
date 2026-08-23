import React from 'react';
const LABEL_11329 = 'component_11329';
export function Component11329({ value = 11329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11329, 'data-value': derived.doubled }, children);
}
export default Component11329;
