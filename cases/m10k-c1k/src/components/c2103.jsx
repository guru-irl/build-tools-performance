import React from 'react';
const LABEL_2103 = 'component_2103';
export function Component2103({ value = 2103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2103, 'data-value': derived.doubled }, children);
}
export default Component2103;
