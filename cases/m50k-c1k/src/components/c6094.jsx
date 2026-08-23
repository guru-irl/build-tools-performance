import React from 'react';
const LABEL_6094 = 'component_6094';
export function Component6094({ value = 6094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6094, 'data-value': derived.doubled }, children);
}
export default Component6094;
