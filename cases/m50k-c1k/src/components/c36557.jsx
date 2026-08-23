import React from 'react';
const LABEL_36557 = 'component_36557';
export function Component36557({ value = 36557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36557, 'data-value': derived.doubled }, children);
}
export default Component36557;
