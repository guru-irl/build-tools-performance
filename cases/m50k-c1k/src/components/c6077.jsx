import React from 'react';
const LABEL_6077 = 'component_6077';
export function Component6077({ value = 6077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6077, 'data-value': derived.doubled }, children);
}
export default Component6077;
