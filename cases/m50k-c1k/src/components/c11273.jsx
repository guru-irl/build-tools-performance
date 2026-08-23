import React from 'react';
const LABEL_11273 = 'component_11273';
export function Component11273({ value = 11273, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11273, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11273, 'data-value': derived.doubled }, children);
}
export default Component11273;
