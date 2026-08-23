import React from 'react';
const LABEL_22015 = 'component_22015';
export function Component22015({ value = 22015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22015, 'data-value': derived.doubled }, children);
}
export default Component22015;
