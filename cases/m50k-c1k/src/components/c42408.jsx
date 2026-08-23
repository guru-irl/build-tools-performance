import React from 'react';
const LABEL_42408 = 'component_42408';
export function Component42408({ value = 42408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42408, 'data-value': derived.doubled }, children);
}
export default Component42408;
