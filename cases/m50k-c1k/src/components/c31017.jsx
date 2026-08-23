import React from 'react';
const LABEL_31017 = 'component_31017';
export function Component31017({ value = 31017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31017, 'data-value': derived.doubled }, children);
}
export default Component31017;
