import React from 'react';
const LABEL_35175 = 'component_35175';
export function Component35175({ value = 35175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35175, 'data-value': derived.doubled }, children);
}
export default Component35175;
