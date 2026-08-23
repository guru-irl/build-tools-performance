import React from 'react';
const LABEL_39806 = 'component_39806';
export function Component39806({ value = 39806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39806, 'data-value': derived.doubled }, children);
}
export default Component39806;
