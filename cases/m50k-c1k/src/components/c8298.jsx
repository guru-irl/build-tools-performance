import React from 'react';
const LABEL_8298 = 'component_8298';
export function Component8298({ value = 8298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8298, 'data-value': derived.doubled }, children);
}
export default Component8298;
