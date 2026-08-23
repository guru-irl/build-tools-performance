import React from 'react';
const LABEL_23327 = 'component_23327';
export function Component23327({ value = 23327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23327, 'data-value': derived.doubled }, children);
}
export default Component23327;
