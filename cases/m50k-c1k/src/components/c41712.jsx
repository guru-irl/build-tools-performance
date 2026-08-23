import React from 'react';
const LABEL_41712 = 'component_41712';
export function Component41712({ value = 41712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41712, 'data-value': derived.doubled }, children);
}
export default Component41712;
