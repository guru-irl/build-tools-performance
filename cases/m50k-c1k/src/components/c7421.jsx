import React from 'react';
const LABEL_7421 = 'component_7421';
export function Component7421({ value = 7421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7421, 'data-value': derived.doubled }, children);
}
export default Component7421;
