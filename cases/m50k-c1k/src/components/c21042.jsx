import React from 'react';
const LABEL_21042 = 'component_21042';
export function Component21042({ value = 21042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21042, 'data-value': derived.doubled }, children);
}
export default Component21042;
