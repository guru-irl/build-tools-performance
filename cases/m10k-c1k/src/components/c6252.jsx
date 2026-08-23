import React from 'react';
const LABEL_6252 = 'component_6252';
export function Component6252({ value = 6252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6252, 'data-value': derived.doubled }, children);
}
export default Component6252;
