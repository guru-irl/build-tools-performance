import React from 'react';
const LABEL_5661 = 'component_5661';
export function Component5661({ value = 5661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5661, 'data-value': derived.doubled }, children);
}
export default Component5661;
