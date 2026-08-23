import React from 'react';
const LABEL_31556 = 'component_31556';
export function Component31556({ value = 31556, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31556, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31556, 'data-value': derived.doubled }, children);
}
export default Component31556;
