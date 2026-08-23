import React from 'react';
const LABEL_44025 = 'component_44025';
export function Component44025({ value = 44025, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44025, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44025, 'data-value': derived.doubled }, children);
}
export default Component44025;
