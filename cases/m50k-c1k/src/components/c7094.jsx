import React from 'react';
const LABEL_7094 = 'component_7094';
export function Component7094({ value = 7094, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7094, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7094, 'data-value': derived.doubled }, children);
}
export default Component7094;
