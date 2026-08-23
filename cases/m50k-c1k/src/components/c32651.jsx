import React from 'react';
const LABEL_32651 = 'component_32651';
export function Component32651({ value = 32651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32651, 'data-value': derived.doubled }, children);
}
export default Component32651;
