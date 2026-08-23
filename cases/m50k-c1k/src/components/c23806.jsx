import React from 'react';
const LABEL_23806 = 'component_23806';
export function Component23806({ value = 23806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23806, 'data-value': derived.doubled }, children);
}
export default Component23806;
