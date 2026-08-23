import React from 'react';
const LABEL_35124 = 'component_35124';
export function Component35124({ value = 35124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35124, 'data-value': derived.doubled }, children);
}
export default Component35124;
