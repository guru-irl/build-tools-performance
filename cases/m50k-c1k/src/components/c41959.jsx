import React from 'react';
const LABEL_41959 = 'component_41959';
export function Component41959({ value = 41959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41959, 'data-value': derived.doubled }, children);
}
export default Component41959;
