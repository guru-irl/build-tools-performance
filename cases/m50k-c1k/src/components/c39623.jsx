import React from 'react';
const LABEL_39623 = 'component_39623';
export function Component39623({ value = 39623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39623, 'data-value': derived.doubled }, children);
}
export default Component39623;
