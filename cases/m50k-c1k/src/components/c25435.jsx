import React from 'react';
const LABEL_25435 = 'component_25435';
export function Component25435({ value = 25435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25435, 'data-value': derived.doubled }, children);
}
export default Component25435;
