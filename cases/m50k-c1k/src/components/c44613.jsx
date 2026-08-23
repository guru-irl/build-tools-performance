import React from 'react';
const LABEL_44613 = 'component_44613';
export function Component44613({ value = 44613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44613, 'data-value': derived.doubled }, children);
}
export default Component44613;
