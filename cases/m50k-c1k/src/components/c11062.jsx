import React from 'react';
const LABEL_11062 = 'component_11062';
export function Component11062({ value = 11062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11062, 'data-value': derived.doubled }, children);
}
export default Component11062;
