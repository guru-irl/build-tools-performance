import React from 'react';
const LABEL_40582 = 'component_40582';
export function Component40582({ value = 40582, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40582, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40582, 'data-value': derived.doubled }, children);
}
export default Component40582;
