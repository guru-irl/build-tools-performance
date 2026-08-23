import React from 'react';
const LABEL_41968 = 'component_41968';
export function Component41968({ value = 41968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41968, 'data-value': derived.doubled }, children);
}
export default Component41968;
