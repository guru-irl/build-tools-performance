import React from 'react';
const LABEL_40128 = 'component_40128';
export function Component40128({ value = 40128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40128, 'data-value': derived.doubled }, children);
}
export default Component40128;
