import React from 'react';
const LABEL_2340 = 'component_2340';
export function Component2340({ value = 2340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2340, 'data-value': derived.doubled }, children);
}
export default Component2340;
