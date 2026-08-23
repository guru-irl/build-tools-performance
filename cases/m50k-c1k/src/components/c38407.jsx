import React from 'react';
const LABEL_38407 = 'component_38407';
export function Component38407({ value = 38407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38407, 'data-value': derived.doubled }, children);
}
export default Component38407;
