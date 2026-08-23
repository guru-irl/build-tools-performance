import React from 'react';
const LABEL_44742 = 'component_44742';
export function Component44742({ value = 44742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44742, 'data-value': derived.doubled }, children);
}
export default Component44742;
