import React from 'react';
const LABEL_23666 = 'component_23666';
export function Component23666({ value = 23666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23666, 'data-value': derived.doubled }, children);
}
export default Component23666;
