import React from 'react';
const LABEL_14726 = 'component_14726';
export function Component14726({ value = 14726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14726, 'data-value': derived.doubled }, children);
}
export default Component14726;
