import React from 'react';
const LABEL_25143 = 'component_25143';
export function Component25143({ value = 25143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25143, 'data-value': derived.doubled }, children);
}
export default Component25143;
