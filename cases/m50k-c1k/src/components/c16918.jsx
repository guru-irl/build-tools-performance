import React from 'react';
const LABEL_16918 = 'component_16918';
export function Component16918({ value = 16918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16918, 'data-value': derived.doubled }, children);
}
export default Component16918;
