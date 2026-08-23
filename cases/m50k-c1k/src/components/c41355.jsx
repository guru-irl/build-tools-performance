import React from 'react';
const LABEL_41355 = 'component_41355';
export function Component41355({ value = 41355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41355, 'data-value': derived.doubled }, children);
}
export default Component41355;
