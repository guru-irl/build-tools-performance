import React from 'react';
const LABEL_42279 = 'component_42279';
export function Component42279({ value = 42279, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42279, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42279, 'data-value': derived.doubled }, children);
}
export default Component42279;
