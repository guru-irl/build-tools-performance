import React from 'react';
const LABEL_39130 = 'component_39130';
export function Component39130({ value = 39130, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39130, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39130, 'data-value': derived.doubled }, children);
}
export default Component39130;
