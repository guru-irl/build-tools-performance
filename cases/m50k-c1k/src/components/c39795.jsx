import React from 'react';
const LABEL_39795 = 'component_39795';
export function Component39795({ value = 39795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39795, 'data-value': derived.doubled }, children);
}
export default Component39795;
