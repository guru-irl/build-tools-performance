import React from 'react';
const LABEL_37899 = 'component_37899';
export function Component37899({ value = 37899, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37899, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37899, 'data-value': derived.doubled }, children);
}
export default Component37899;
