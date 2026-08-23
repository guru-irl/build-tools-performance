import React from 'react';
const LABEL_44813 = 'component_44813';
export function Component44813({ value = 44813, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44813, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44813, 'data-value': derived.doubled }, children);
}
export default Component44813;
