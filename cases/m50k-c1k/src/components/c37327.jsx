import React from 'react';
const LABEL_37327 = 'component_37327';
export function Component37327({ value = 37327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37327, 'data-value': derived.doubled }, children);
}
export default Component37327;
