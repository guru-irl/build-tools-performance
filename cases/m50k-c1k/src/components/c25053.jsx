import React from 'react';
const LABEL_25053 = 'component_25053';
export function Component25053({ value = 25053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25053, 'data-value': derived.doubled }, children);
}
export default Component25053;
