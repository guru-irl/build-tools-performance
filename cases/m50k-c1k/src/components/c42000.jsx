import React from 'react';
const LABEL_42000 = 'component_42000';
export function Component42000({ value = 42000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42000, 'data-value': derived.doubled }, children);
}
export default Component42000;
