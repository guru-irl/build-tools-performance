import React from 'react';
const LABEL_2425 = 'component_2425';
export function Component2425({ value = 2425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2425, 'data-value': derived.doubled }, children);
}
export default Component2425;
