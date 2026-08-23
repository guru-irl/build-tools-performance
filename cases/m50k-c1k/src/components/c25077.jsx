import React from 'react';
const LABEL_25077 = 'component_25077';
export function Component25077({ value = 25077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25077, 'data-value': derived.doubled }, children);
}
export default Component25077;
