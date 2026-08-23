import React from 'react';
const LABEL_17806 = 'component_17806';
export function Component17806({ value = 17806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17806, 'data-value': derived.doubled }, children);
}
export default Component17806;
