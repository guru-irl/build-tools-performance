import React from 'react';
const LABEL_3234 = 'component_3234';
export function Component3234({ value = 3234, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3234, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3234, 'data-value': derived.doubled }, children);
}
export default Component3234;
