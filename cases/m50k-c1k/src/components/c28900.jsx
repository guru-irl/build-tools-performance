import React from 'react';
const LABEL_28900 = 'component_28900';
export function Component28900({ value = 28900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28900, 'data-value': derived.doubled }, children);
}
export default Component28900;
