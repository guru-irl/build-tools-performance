import React from 'react';
const LABEL_44327 = 'component_44327';
export function Component44327({ value = 44327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44327, 'data-value': derived.doubled }, children);
}
export default Component44327;
