import React from 'react';
const LABEL_31435 = 'component_31435';
export function Component31435({ value = 31435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31435, 'data-value': derived.doubled }, children);
}
export default Component31435;
