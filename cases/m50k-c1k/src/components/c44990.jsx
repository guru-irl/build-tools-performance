import React from 'react';
const LABEL_44990 = 'component_44990';
export function Component44990({ value = 44990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44990, 'data-value': derived.doubled }, children);
}
export default Component44990;
