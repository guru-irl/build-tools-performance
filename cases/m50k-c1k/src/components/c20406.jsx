import React from 'react';
const LABEL_20406 = 'component_20406';
export function Component20406({ value = 20406, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20406, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20406, 'data-value': derived.doubled }, children);
}
export default Component20406;
