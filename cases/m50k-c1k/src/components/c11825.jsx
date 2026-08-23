import React from 'react';
const LABEL_11825 = 'component_11825';
export function Component11825({ value = 11825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11825, 'data-value': derived.doubled }, children);
}
export default Component11825;
