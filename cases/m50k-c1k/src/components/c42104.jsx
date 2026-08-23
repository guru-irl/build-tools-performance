import React from 'react';
const LABEL_42104 = 'component_42104';
export function Component42104({ value = 42104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42104, 'data-value': derived.doubled }, children);
}
export default Component42104;
