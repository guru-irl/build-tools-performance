import React from 'react';
const LABEL_41652 = 'component_41652';
export function Component41652({ value = 41652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41652, 'data-value': derived.doubled }, children);
}
export default Component41652;
