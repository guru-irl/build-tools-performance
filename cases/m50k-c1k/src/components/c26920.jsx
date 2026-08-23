import React from 'react';
const LABEL_26920 = 'component_26920';
export function Component26920({ value = 26920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26920, 'data-value': derived.doubled }, children);
}
export default Component26920;
