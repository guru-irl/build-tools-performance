import React from 'react';
const LABEL_41876 = 'component_41876';
export function Component41876({ value = 41876, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41876, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41876, 'data-value': derived.doubled }, children);
}
export default Component41876;
