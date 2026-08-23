import React from 'react';
const LABEL_35568 = 'component_35568';
export function Component35568({ value = 35568, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35568, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35568, 'data-value': derived.doubled }, children);
}
export default Component35568;
