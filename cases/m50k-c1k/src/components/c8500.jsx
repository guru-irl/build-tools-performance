import React from 'react';
const LABEL_8500 = 'component_8500';
export function Component8500({ value = 8500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8500, 'data-value': derived.doubled }, children);
}
export default Component8500;
