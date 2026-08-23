import React from 'react';
const LABEL_2644 = 'component_2644';
export function Component2644({ value = 2644, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2644, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2644, 'data-value': derived.doubled }, children);
}
export default Component2644;
