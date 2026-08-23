import React from 'react';
const LABEL_11742 = 'component_11742';
export function Component11742({ value = 11742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11742, 'data-value': derived.doubled }, children);
}
export default Component11742;
