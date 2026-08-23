import React from 'react';
const LABEL_21312 = 'component_21312';
export function Component21312({ value = 21312, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21312, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21312, 'data-value': derived.doubled }, children);
}
export default Component21312;
