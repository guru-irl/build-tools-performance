import React from 'react';
const LABEL_46072 = 'component_46072';
export function Component46072({ value = 46072, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46072, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46072, 'data-value': derived.doubled }, children);
}
export default Component46072;
