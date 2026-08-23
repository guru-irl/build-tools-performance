import React from 'react';
const LABEL_38411 = 'component_38411';
export function Component38411({ value = 38411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38411, 'data-value': derived.doubled }, children);
}
export default Component38411;
