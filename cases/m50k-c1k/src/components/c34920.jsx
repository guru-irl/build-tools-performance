import React from 'react';
const LABEL_34920 = 'component_34920';
export function Component34920({ value = 34920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34920, 'data-value': derived.doubled }, children);
}
export default Component34920;
