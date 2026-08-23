import React from 'react';
const LABEL_13900 = 'component_13900';
export function Component13900({ value = 13900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13900, 'data-value': derived.doubled }, children);
}
export default Component13900;
