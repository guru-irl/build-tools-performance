import React from 'react';
const LABEL_16076 = 'component_16076';
export function Component16076({ value = 16076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16076, 'data-value': derived.doubled }, children);
}
export default Component16076;
