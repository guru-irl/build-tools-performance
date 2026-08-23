import React from 'react';
const LABEL_31714 = 'component_31714';
export function Component31714({ value = 31714, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31714, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31714, 'data-value': derived.doubled }, children);
}
export default Component31714;
