import React from 'react';
const LABEL_25312 = 'component_25312';
export function Component25312({ value = 25312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25312, 'data-value': derived.doubled }, children);
}
export default Component25312;
