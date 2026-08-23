import React from 'react';
const LABEL_25267 = 'component_25267';
export function Component25267({ value = 25267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25267, 'data-value': derived.doubled }, children);
}
export default Component25267;
