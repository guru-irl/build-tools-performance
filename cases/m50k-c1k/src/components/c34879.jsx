import React from 'react';
const LABEL_34879 = 'component_34879';
export function Component34879({ value = 34879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34879, 'data-value': derived.doubled }, children);
}
export default Component34879;
