import React from 'react';
const LABEL_2462 = 'component_2462';
export function Component2462({ value = 2462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2462, 'data-value': derived.doubled }, children);
}
export default Component2462;
