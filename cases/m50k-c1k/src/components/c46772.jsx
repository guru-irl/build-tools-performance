import React from 'react';
const LABEL_46772 = 'component_46772';
export function Component46772({ value = 46772, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46772, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46772, 'data-value': derived.doubled }, children);
}
export default Component46772;
