import React from 'react';
const LABEL_25960 = 'component_25960';
export function Component25960({ value = 25960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25960, 'data-value': derived.doubled }, children);
}
export default Component25960;
