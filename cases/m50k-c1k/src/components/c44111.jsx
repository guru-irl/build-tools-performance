import React from 'react';
const LABEL_44111 = 'component_44111';
export function Component44111({ value = 44111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44111, 'data-value': derived.doubled }, children);
}
export default Component44111;
