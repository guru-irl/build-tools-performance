import React from 'react';
const LABEL_25327 = 'component_25327';
export function Component25327({ value = 25327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25327, 'data-value': derived.doubled }, children);
}
export default Component25327;
