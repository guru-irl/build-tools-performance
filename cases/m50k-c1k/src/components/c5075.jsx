import React from 'react';
const LABEL_5075 = 'component_5075';
export function Component5075({ value = 5075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5075, 'data-value': derived.doubled }, children);
}
export default Component5075;
