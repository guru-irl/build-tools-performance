import React from 'react';
const LABEL_41327 = 'component_41327';
export function Component41327({ value = 41327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41327, 'data-value': derived.doubled }, children);
}
export default Component41327;
