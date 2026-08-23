import React from 'react';
const LABEL_25796 = 'component_25796';
export function Component25796({ value = 25796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25796, 'data-value': derived.doubled }, children);
}
export default Component25796;
