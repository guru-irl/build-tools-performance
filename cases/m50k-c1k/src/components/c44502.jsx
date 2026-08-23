import React from 'react';
const LABEL_44502 = 'component_44502';
export function Component44502({ value = 44502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44502, 'data-value': derived.doubled }, children);
}
export default Component44502;
