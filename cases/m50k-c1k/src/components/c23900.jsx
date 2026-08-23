import React from 'react';
const LABEL_23900 = 'component_23900';
export function Component23900({ value = 23900, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23900, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23900, 'data-value': derived.doubled }, children);
}
export default Component23900;
