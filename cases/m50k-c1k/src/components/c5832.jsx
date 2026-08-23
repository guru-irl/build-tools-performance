import React from 'react';
const LABEL_5832 = 'component_5832';
export function Component5832({ value = 5832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5832, 'data-value': derived.doubled }, children);
}
export default Component5832;
