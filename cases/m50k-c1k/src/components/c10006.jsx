import React from 'react';
const LABEL_10006 = 'component_10006';
export function Component10006({ value = 10006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10006, 'data-value': derived.doubled }, children);
}
export default Component10006;
