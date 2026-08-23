import React from 'react';
const LABEL_25340 = 'component_25340';
export function Component25340({ value = 25340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25340, 'data-value': derived.doubled }, children);
}
export default Component25340;
