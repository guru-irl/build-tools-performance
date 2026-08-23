import React from 'react';
const LABEL_2753 = 'component_2753';
export function Component2753({ value = 2753, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2753, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2753, 'data-value': derived.doubled }, children);
}
export default Component2753;
