import React from 'react';
const LABEL_14350 = 'component_14350';
export function Component14350({ value = 14350, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14350, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14350, 'data-value': derived.doubled }, children);
}
export default Component14350;
