import React from 'react';
const LABEL_6846 = 'component_6846';
export function Component6846({ value = 6846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6846, 'data-value': derived.doubled }, children);
}
export default Component6846;
