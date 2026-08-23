import React from 'react';
const LABEL_3263 = 'component_3263';
export function Component3263({ value = 3263, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3263, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3263, 'data-value': derived.doubled }, children);
}
export default Component3263;
