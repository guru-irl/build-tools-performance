import React from 'react';
const LABEL_2207 = 'component_2207';
export function Component2207({ value = 2207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2207, 'data-value': derived.doubled }, children);
}
export default Component2207;
