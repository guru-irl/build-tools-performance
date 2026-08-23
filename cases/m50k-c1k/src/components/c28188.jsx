import React from 'react';
const LABEL_28188 = 'component_28188';
export function Component28188({ value = 28188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28188, 'data-value': derived.doubled }, children);
}
export default Component28188;
