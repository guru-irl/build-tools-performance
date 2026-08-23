import React from 'react';
const LABEL_16832 = 'component_16832';
export function Component16832({ value = 16832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16832, 'data-value': derived.doubled }, children);
}
export default Component16832;
