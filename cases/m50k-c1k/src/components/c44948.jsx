import React from 'react';
const LABEL_44948 = 'component_44948';
export function Component44948({ value = 44948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44948, 'data-value': derived.doubled }, children);
}
export default Component44948;
