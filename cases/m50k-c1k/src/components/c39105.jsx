import React from 'react';
const LABEL_39105 = 'component_39105';
export function Component39105({ value = 39105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39105, 'data-value': derived.doubled }, children);
}
export default Component39105;
