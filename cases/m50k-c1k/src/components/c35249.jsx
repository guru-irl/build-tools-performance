import React from 'react';
const LABEL_35249 = 'component_35249';
export function Component35249({ value = 35249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35249, 'data-value': derived.doubled }, children);
}
export default Component35249;
