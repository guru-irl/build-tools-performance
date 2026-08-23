import React from 'react';
const LABEL_33144 = 'component_33144';
export function Component33144({ value = 33144, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33144, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33144, 'data-value': derived.doubled }, children);
}
export default Component33144;
