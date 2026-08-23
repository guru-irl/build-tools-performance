import React from 'react';
const LABEL_37094 = 'component_37094';
export function Component37094({ value = 37094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37094, 'data-value': derived.doubled }, children);
}
export default Component37094;
