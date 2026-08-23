import React from 'react';
const LABEL_7327 = 'component_7327';
export function Component7327({ value = 7327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7327, 'data-value': derived.doubled }, children);
}
export default Component7327;
