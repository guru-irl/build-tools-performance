import React from 'react';
const LABEL_3948 = 'component_3948';
export function Component3948({ value = 3948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3948, 'data-value': derived.doubled }, children);
}
export default Component3948;
