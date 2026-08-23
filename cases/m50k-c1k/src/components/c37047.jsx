import React from 'react';
const LABEL_37047 = 'component_37047';
export function Component37047({ value = 37047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37047, 'data-value': derived.doubled }, children);
}
export default Component37047;
