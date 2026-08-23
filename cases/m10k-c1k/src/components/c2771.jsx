import React from 'react';
const LABEL_2771 = 'component_2771';
export function Component2771({ value = 2771, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2771, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2771, 'data-value': derived.doubled }, children);
}
export default Component2771;
