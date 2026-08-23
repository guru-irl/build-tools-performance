import React from 'react';
const LABEL_18327 = 'component_18327';
export function Component18327({ value = 18327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18327, 'data-value': derived.doubled }, children);
}
export default Component18327;
