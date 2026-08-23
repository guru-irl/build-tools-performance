import React from 'react';
const LABEL_11160 = 'component_11160';
export function Component11160({ value = 11160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11160, 'data-value': derived.doubled }, children);
}
export default Component11160;
