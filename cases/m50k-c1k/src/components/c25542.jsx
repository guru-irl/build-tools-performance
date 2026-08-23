import React from 'react';
const LABEL_25542 = 'component_25542';
export function Component25542({ value = 25542, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25542, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25542, 'data-value': derived.doubled }, children);
}
export default Component25542;
