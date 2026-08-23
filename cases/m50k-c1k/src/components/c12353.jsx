import React from 'react';
const LABEL_12353 = 'component_12353';
export function Component12353({ value = 12353, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12353, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12353, 'data-value': derived.doubled }, children);
}
export default Component12353;
