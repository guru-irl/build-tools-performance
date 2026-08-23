import React from 'react';
const LABEL_41833 = 'component_41833';
export function Component41833({ value = 41833, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41833, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41833, 'data-value': derived.doubled }, children);
}
export default Component41833;
