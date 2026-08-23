import React from 'react';
const LABEL_44710 = 'component_44710';
export function Component44710({ value = 44710, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44710, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44710, 'data-value': derived.doubled }, children);
}
export default Component44710;
