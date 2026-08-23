import React from 'react';
const LABEL_41118 = 'component_41118';
export function Component41118({ value = 41118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41118, 'data-value': derived.doubled }, children);
}
export default Component41118;
