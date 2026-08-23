import React from 'react';
const LABEL_41070 = 'component_41070';
export function Component41070({ value = 41070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41070, 'data-value': derived.doubled }, children);
}
export default Component41070;
