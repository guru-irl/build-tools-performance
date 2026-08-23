import React from 'react';
const LABEL_2945 = 'component_2945';
export function Component2945({ value = 2945, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2945, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2945, 'data-value': derived.doubled }, children);
}
export default Component2945;
