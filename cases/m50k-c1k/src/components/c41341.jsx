import React from 'react';
const LABEL_41341 = 'component_41341';
export function Component41341({ value = 41341, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41341, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41341, 'data-value': derived.doubled }, children);
}
export default Component41341;
