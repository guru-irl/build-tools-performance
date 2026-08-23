import React from 'react';
const LABEL_7252 = 'component_7252';
export function Component7252({ value = 7252, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7252, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7252, 'data-value': derived.doubled }, children);
}
export default Component7252;
