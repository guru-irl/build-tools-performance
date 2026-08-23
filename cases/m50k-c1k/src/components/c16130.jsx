import React from 'react';
const LABEL_16130 = 'component_16130';
export function Component16130({ value = 16130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16130, 'data-value': derived.doubled }, children);
}
export default Component16130;
