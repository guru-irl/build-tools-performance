import React from 'react';
const LABEL_38094 = 'component_38094';
export function Component38094({ value = 38094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38094, 'data-value': derived.doubled }, children);
}
export default Component38094;
