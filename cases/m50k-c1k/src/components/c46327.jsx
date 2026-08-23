import React from 'react';
const LABEL_46327 = 'component_46327';
export function Component46327({ value = 46327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46327, 'data-value': derived.doubled }, children);
}
export default Component46327;
