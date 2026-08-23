import React from 'react';
const LABEL_6486 = 'component_6486';
export function Component6486({ value = 6486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6486, 'data-value': derived.doubled }, children);
}
export default Component6486;
