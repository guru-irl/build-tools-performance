import React from 'react';
const LABEL_16757 = 'component_16757';
export function Component16757({ value = 16757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16757, 'data-value': derived.doubled }, children);
}
export default Component16757;
