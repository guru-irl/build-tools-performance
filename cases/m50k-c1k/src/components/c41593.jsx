import React from 'react';
const LABEL_41593 = 'component_41593';
export function Component41593({ value = 41593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41593, 'data-value': derived.doubled }, children);
}
export default Component41593;
