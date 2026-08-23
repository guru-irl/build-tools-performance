import React from 'react';
const LABEL_7047 = 'component_7047';
export function Component7047({ value = 7047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7047, 'data-value': derived.doubled }, children);
}
export default Component7047;
