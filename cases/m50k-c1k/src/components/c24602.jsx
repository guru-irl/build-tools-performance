import React from 'react';
const LABEL_24602 = 'component_24602';
export function Component24602({ value = 24602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24602, 'data-value': derived.doubled }, children);
}
export default Component24602;
