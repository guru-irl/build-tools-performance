import React from 'react';
const LABEL_2335 = 'component_2335';
export function Component2335({ value = 2335, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2335, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2335, 'data-value': derived.doubled }, children);
}
export default Component2335;
