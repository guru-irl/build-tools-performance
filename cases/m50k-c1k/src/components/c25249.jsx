import React from 'react';
const LABEL_25249 = 'component_25249';
export function Component25249({ value = 25249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25249, 'data-value': derived.doubled }, children);
}
export default Component25249;
