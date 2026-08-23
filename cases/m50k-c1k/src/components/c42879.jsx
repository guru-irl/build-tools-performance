import React from 'react';
const LABEL_42879 = 'component_42879';
export function Component42879({ value = 42879, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42879, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42879, 'data-value': derived.doubled }, children);
}
export default Component42879;
