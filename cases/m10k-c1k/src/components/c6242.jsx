import React from 'react';
const LABEL_6242 = 'component_6242';
export function Component6242({ value = 6242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6242, 'data-value': derived.doubled }, children);
}
export default Component6242;
