import React from 'react';
const LABEL_38125 = 'component_38125';
export function Component38125({ value = 38125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38125, 'data-value': derived.doubled }, children);
}
export default Component38125;
