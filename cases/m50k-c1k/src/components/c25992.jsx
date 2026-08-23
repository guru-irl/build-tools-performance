import React from 'react';
const LABEL_25992 = 'component_25992';
export function Component25992({ value = 25992, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25992, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25992, 'data-value': derived.doubled }, children);
}
export default Component25992;
