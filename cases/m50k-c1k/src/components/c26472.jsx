import React from 'react';
const LABEL_26472 = 'component_26472';
export function Component26472({ value = 26472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26472, 'data-value': derived.doubled }, children);
}
export default Component26472;
