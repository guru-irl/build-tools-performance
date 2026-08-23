import React from 'react';
const LABEL_41031 = 'component_41031';
export function Component41031({ value = 41031, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41031, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41031, 'data-value': derived.doubled }, children);
}
export default Component41031;
