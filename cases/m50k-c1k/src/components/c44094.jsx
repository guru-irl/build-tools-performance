import React from 'react';
const LABEL_44094 = 'component_44094';
export function Component44094({ value = 44094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44094, 'data-value': derived.doubled }, children);
}
export default Component44094;
