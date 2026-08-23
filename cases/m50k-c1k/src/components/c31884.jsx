import React from 'react';
const LABEL_31884 = 'component_31884';
export function Component31884({ value = 31884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31884, 'data-value': derived.doubled }, children);
}
export default Component31884;
