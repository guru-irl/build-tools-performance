import React from 'react';
const LABEL_25859 = 'component_25859';
export function Component25859({ value = 25859, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25859, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25859, 'data-value': derived.doubled }, children);
}
export default Component25859;
