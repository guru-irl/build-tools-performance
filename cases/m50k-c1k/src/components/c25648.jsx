import React from 'react';
const LABEL_25648 = 'component_25648';
export function Component25648({ value = 25648, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25648, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25648, 'data-value': derived.doubled }, children);
}
export default Component25648;
