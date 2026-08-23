import React from 'react';
const LABEL_39041 = 'component_39041';
export function Component39041({ value = 39041, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39041, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39041, 'data-value': derived.doubled }, children);
}
export default Component39041;
