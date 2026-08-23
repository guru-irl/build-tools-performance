import React from 'react';
const LABEL_41307 = 'component_41307';
export function Component41307({ value = 41307, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41307, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41307, 'data-value': derived.doubled }, children);
}
export default Component41307;
