import React from 'react';
const LABEL_23304 = 'component_23304';
export function Component23304({ value = 23304, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23304, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23304, 'data-value': derived.doubled }, children);
}
export default Component23304;
