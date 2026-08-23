import React from 'react';
const LABEL_41861 = 'component_41861';
export function Component41861({ value = 41861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41861, 'data-value': derived.doubled }, children);
}
export default Component41861;
