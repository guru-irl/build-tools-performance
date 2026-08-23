import React from 'react';
const LABEL_25413 = 'component_25413';
export function Component25413({ value = 25413, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25413, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25413, 'data-value': derived.doubled }, children);
}
export default Component25413;
