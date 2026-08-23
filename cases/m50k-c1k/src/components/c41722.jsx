import React from 'react';
const LABEL_41722 = 'component_41722';
export function Component41722({ value = 41722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41722, 'data-value': derived.doubled }, children);
}
export default Component41722;
