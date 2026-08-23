import React from 'react';
const LABEL_25245 = 'component_25245';
export function Component25245({ value = 25245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25245, 'data-value': derived.doubled }, children);
}
export default Component25245;
