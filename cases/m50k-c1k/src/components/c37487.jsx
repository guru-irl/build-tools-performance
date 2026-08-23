import React from 'react';
const LABEL_37487 = 'component_37487';
export function Component37487({ value = 37487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37487, 'data-value': derived.doubled }, children);
}
export default Component37487;
