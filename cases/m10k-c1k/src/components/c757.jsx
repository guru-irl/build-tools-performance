import React from 'react';
const LABEL_757 = 'component_757';
export function Component757({ value = 757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_757, 'data-value': derived.doubled }, children);
}
export default Component757;
