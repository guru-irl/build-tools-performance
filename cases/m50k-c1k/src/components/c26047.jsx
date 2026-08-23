import React from 'react';
const LABEL_26047 = 'component_26047';
export function Component26047({ value = 26047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26047, 'data-value': derived.doubled }, children);
}
export default Component26047;
