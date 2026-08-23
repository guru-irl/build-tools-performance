import React from 'react';
const LABEL_13015 = 'component_13015';
export function Component13015({ value = 13015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13015, 'data-value': derived.doubled }, children);
}
export default Component13015;
