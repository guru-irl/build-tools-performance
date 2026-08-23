import React from 'react';
const LABEL_36079 = 'component_36079';
export function Component36079({ value = 36079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36079, 'data-value': derived.doubled }, children);
}
export default Component36079;
