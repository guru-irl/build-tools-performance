import React from 'react';
const LABEL_34990 = 'component_34990';
export function Component34990({ value = 34990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34990, 'data-value': derived.doubled }, children);
}
export default Component34990;
