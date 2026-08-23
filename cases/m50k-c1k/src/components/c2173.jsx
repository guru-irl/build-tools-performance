import React from 'react';
const LABEL_2173 = 'component_2173';
export function Component2173({ value = 2173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2173, 'data-value': derived.doubled }, children);
}
export default Component2173;
