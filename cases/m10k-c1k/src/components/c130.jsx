import React from 'react';
const LABEL_130 = 'component_130';
export function Component130({ value = 130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_130, 'data-value': derived.doubled }, children);
}
export default Component130;
