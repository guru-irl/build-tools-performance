import React from 'react';
const LABEL_41965 = 'component_41965';
export function Component41965({ value = 41965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41965, 'data-value': derived.doubled }, children);
}
export default Component41965;
