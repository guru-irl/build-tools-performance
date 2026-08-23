import React from 'react';
const LABEL_25274 = 'component_25274';
export function Component25274({ value = 25274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25274, 'data-value': derived.doubled }, children);
}
export default Component25274;
