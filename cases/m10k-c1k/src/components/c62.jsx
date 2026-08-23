import React from 'react';
const LABEL_62 = 'component_62';
export function Component62({ value = 62, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_62, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_62, 'data-value': derived.doubled }, children);
}
export default Component62;
