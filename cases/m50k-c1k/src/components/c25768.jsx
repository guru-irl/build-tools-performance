import React from 'react';
const LABEL_25768 = 'component_25768';
export function Component25768({ value = 25768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25768, 'data-value': derived.doubled }, children);
}
export default Component25768;
