import React from 'react';
const LABEL_44628 = 'component_44628';
export function Component44628({ value = 44628, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44628, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44628, 'data-value': derived.doubled }, children);
}
export default Component44628;
