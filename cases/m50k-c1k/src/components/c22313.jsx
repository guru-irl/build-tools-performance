import React from 'react';
const LABEL_22313 = 'component_22313';
export function Component22313({ value = 22313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22313, 'data-value': derived.doubled }, children);
}
export default Component22313;
