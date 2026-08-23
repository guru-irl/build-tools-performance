import React from 'react';
const LABEL_33943 = 'component_33943';
export function Component33943({ value = 33943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33943, 'data-value': derived.doubled }, children);
}
export default Component33943;
