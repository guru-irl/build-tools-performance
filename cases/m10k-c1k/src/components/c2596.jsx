import React from 'react';
const LABEL_2596 = 'component_2596';
export function Component2596({ value = 2596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2596, 'data-value': derived.doubled }, children);
}
export default Component2596;
