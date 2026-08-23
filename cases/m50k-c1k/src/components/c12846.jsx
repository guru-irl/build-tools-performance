import React from 'react';
const LABEL_12846 = 'component_12846';
export function Component12846({ value = 12846, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12846, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12846, 'data-value': derived.doubled }, children);
}
export default Component12846;
