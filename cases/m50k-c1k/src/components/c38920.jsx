import React from 'react';
const LABEL_38920 = 'component_38920';
export function Component38920({ value = 38920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38920, 'data-value': derived.doubled }, children);
}
export default Component38920;
