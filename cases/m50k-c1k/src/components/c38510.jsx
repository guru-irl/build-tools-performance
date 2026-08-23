import React from 'react';
const LABEL_38510 = 'component_38510';
export function Component38510({ value = 38510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38510, 'data-value': derived.doubled }, children);
}
export default Component38510;
