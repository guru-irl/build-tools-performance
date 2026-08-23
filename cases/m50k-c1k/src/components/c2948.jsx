import React from 'react';
const LABEL_2948 = 'component_2948';
export function Component2948({ value = 2948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2948, 'data-value': derived.doubled }, children);
}
export default Component2948;
