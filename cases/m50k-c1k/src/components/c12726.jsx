import React from 'react';
const LABEL_12726 = 'component_12726';
export function Component12726({ value = 12726, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12726, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12726, 'data-value': derived.doubled }, children);
}
export default Component12726;
