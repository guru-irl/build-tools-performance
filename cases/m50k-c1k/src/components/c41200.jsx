import React from 'react';
const LABEL_41200 = 'component_41200';
export function Component41200({ value = 41200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41200, 'data-value': derived.doubled }, children);
}
export default Component41200;
