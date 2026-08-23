import React from 'react';
const LABEL_481 = 'component_481';
export function Component481({ value = 481, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_481, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_481, 'data-value': derived.doubled }, children);
}
export default Component481;
