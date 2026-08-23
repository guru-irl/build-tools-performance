import React from 'react';
const LABEL_36183 = 'component_36183';
export function Component36183({ value = 36183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36183, 'data-value': derived.doubled }, children);
}
export default Component36183;
