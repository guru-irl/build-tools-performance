import React from 'react';
const LABEL_13835 = 'component_13835';
export function Component13835({ value = 13835, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13835, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13835, 'data-value': derived.doubled }, children);
}
export default Component13835;
