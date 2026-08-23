import React from 'react';
const LABEL_4777 = 'component_4777';
export function Component4777({ value = 4777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4777, 'data-value': derived.doubled }, children);
}
export default Component4777;
