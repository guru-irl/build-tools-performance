import React from 'react';
const LABEL_20771 = 'component_20771';
export function Component20771({ value = 20771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20771, 'data-value': derived.doubled }, children);
}
export default Component20771;
