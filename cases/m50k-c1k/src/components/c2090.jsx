import React from 'react';
const LABEL_2090 = 'component_2090';
export function Component2090({ value = 2090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2090, 'data-value': derived.doubled }, children);
}
export default Component2090;
