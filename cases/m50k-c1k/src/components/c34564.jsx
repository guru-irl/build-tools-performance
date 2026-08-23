import React from 'react';
const LABEL_34564 = 'component_34564';
export function Component34564({ value = 34564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34564, 'data-value': derived.doubled }, children);
}
export default Component34564;
