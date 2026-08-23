import React from 'react';
const LABEL_41009 = 'component_41009';
export function Component41009({ value = 41009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41009, 'data-value': derived.doubled }, children);
}
export default Component41009;
