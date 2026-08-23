import React from 'react';
const LABEL_22440 = 'component_22440';
export function Component22440({ value = 22440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22440, 'data-value': derived.doubled }, children);
}
export default Component22440;
