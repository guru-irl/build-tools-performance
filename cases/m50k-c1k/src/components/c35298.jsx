import React from 'react';
const LABEL_35298 = 'component_35298';
export function Component35298({ value = 35298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35298, 'data-value': derived.doubled }, children);
}
export default Component35298;
