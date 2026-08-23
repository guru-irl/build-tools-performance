import React from 'react';
const LABEL_41425 = 'component_41425';
export function Component41425({ value = 41425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41425, 'data-value': derived.doubled }, children);
}
export default Component41425;
