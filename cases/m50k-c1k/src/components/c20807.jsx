import React from 'react';
const LABEL_20807 = 'component_20807';
export function Component20807({ value = 20807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20807, 'data-value': derived.doubled }, children);
}
export default Component20807;
