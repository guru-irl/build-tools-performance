import React from 'react';
const LABEL_6777 = 'component_6777';
export function Component6777({ value = 6777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6777, 'data-value': derived.doubled }, children);
}
export default Component6777;
