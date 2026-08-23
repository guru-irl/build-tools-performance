import React from 'react';
const LABEL_41313 = 'component_41313';
export function Component41313({ value = 41313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41313, 'data-value': derived.doubled }, children);
}
export default Component41313;
