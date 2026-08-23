import React from 'react';
const LABEL_11441 = 'component_11441';
export function Component11441({ value = 11441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11441, 'data-value': derived.doubled }, children);
}
export default Component11441;
