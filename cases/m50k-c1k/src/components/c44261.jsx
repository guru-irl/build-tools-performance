import React from 'react';
const LABEL_44261 = 'component_44261';
export function Component44261({ value = 44261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44261, 'data-value': derived.doubled }, children);
}
export default Component44261;
