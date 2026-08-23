import React from 'react';
const LABEL_25596 = 'component_25596';
export function Component25596({ value = 25596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25596, 'data-value': derived.doubled }, children);
}
export default Component25596;
