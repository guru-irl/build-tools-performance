import React from 'react';
const LABEL_15403 = 'component_15403';
export function Component15403({ value = 15403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15403, 'data-value': derived.doubled }, children);
}
export default Component15403;
