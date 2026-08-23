import React from 'react';
const LABEL_41117 = 'component_41117';
export function Component41117({ value = 41117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41117, 'data-value': derived.doubled }, children);
}
export default Component41117;
