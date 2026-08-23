import React from 'react';
const LABEL_6609 = 'component_6609';
export function Component6609({ value = 6609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6609, 'data-value': derived.doubled }, children);
}
export default Component6609;
