import React from 'react';
const LABEL_25573 = 'component_25573';
export function Component25573({ value = 25573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25573, 'data-value': derived.doubled }, children);
}
export default Component25573;
