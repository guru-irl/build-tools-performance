import React from 'react';
const LABEL_32411 = 'component_32411';
export function Component32411({ value = 32411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32411, 'data-value': derived.doubled }, children);
}
export default Component32411;
