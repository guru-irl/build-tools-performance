import React from 'react';
const LABEL_38804 = 'component_38804';
export function Component38804({ value = 38804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38804, 'data-value': derived.doubled }, children);
}
export default Component38804;
