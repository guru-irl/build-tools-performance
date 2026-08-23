import React from 'react';
const LABEL_41800 = 'component_41800';
export function Component41800({ value = 41800, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41800, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41800, 'data-value': derived.doubled }, children);
}
export default Component41800;
