import React from 'react';
const LABEL_40564 = 'component_40564';
export function Component40564({ value = 40564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40564, 'data-value': derived.doubled }, children);
}
export default Component40564;
