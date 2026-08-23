import React from 'react';
const LABEL_38111 = 'component_38111';
export function Component38111({ value = 38111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38111, 'data-value': derived.doubled }, children);
}
export default Component38111;
