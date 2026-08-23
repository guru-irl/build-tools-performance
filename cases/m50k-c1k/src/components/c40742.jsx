import React from 'react';
const LABEL_40742 = 'component_40742';
export function Component40742({ value = 40742, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40742, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40742, 'data-value': derived.doubled }, children);
}
export default Component40742;
