import React from 'react';
const LABEL_25374 = 'component_25374';
export function Component25374({ value = 25374, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25374, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25374, 'data-value': derived.doubled }, children);
}
export default Component25374;
