import React from 'react';
const LABEL_26327 = 'component_26327';
export function Component26327({ value = 26327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26327, 'data-value': derived.doubled }, children);
}
export default Component26327;
