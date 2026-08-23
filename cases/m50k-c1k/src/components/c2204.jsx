import React from 'react';
const LABEL_2204 = 'component_2204';
export function Component2204({ value = 2204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2204, 'data-value': derived.doubled }, children);
}
export default Component2204;
