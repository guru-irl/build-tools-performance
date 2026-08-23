import React from 'react';
const LABEL_37796 = 'component_37796';
export function Component37796({ value = 37796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37796, 'data-value': derived.doubled }, children);
}
export default Component37796;
