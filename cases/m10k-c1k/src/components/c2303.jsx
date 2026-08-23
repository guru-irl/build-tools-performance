import React from 'react';
const LABEL_2303 = 'component_2303';
export function Component2303({ value = 2303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2303, 'data-value': derived.doubled }, children);
}
export default Component2303;
