import React from 'react';
const LABEL_6179 = 'component_6179';
export function Component6179({ value = 6179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6179, 'data-value': derived.doubled }, children);
}
export default Component6179;
