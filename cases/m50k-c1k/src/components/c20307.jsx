import React from 'react';
const LABEL_20307 = 'component_20307';
export function Component20307({ value = 20307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20307, 'data-value': derived.doubled }, children);
}
export default Component20307;
