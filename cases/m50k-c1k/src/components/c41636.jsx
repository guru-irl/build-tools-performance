import React from 'react';
const LABEL_41636 = 'component_41636';
export function Component41636({ value = 41636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41636, 'data-value': derived.doubled }, children);
}
export default Component41636;
