import React from 'react';
const LABEL_37651 = 'component_37651';
export function Component37651({ value = 37651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37651, 'data-value': derived.doubled }, children);
}
export default Component37651;
