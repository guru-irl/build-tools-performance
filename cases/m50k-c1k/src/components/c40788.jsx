import React from 'react';
const LABEL_40788 = 'component_40788';
export function Component40788({ value = 40788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40788, 'data-value': derived.doubled }, children);
}
export default Component40788;
