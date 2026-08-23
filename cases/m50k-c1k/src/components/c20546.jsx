import React from 'react';
const LABEL_20546 = 'component_20546';
export function Component20546({ value = 20546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20546, 'data-value': derived.doubled }, children);
}
export default Component20546;
