import React from 'react';
const LABEL_40426 = 'component_40426';
export function Component40426({ value = 40426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40426, 'data-value': derived.doubled }, children);
}
export default Component40426;
