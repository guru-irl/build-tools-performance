import React from 'react';
const LABEL_41421 = 'component_41421';
export function Component41421({ value = 41421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41421, 'data-value': derived.doubled }, children);
}
export default Component41421;
