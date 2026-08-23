import React from 'react';
const LABEL_20079 = 'component_20079';
export function Component20079({ value = 20079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20079, 'data-value': derived.doubled }, children);
}
export default Component20079;
