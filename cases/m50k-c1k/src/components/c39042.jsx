import React from 'react';
const LABEL_39042 = 'component_39042';
export function Component39042({ value = 39042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39042, 'data-value': derived.doubled }, children);
}
export default Component39042;
