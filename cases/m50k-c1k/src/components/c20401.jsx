import React from 'react';
const LABEL_20401 = 'component_20401';
export function Component20401({ value = 20401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20401, 'data-value': derived.doubled }, children);
}
export default Component20401;
