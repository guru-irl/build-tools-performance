import React from 'react';
const LABEL_16219 = 'component_16219';
export function Component16219({ value = 16219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16219, 'data-value': derived.doubled }, children);
}
export default Component16219;
