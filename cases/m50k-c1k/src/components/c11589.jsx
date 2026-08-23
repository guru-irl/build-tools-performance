import React from 'react';
const LABEL_11589 = 'component_11589';
export function Component11589({ value = 11589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11589, 'data-value': derived.doubled }, children);
}
export default Component11589;
