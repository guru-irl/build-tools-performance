import React from 'react';
const LABEL_11900 = 'component_11900';
export function Component11900({ value = 11900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11900, 'data-value': derived.doubled }, children);
}
export default Component11900;
