import React from 'react';
const LABEL_7812 = 'component_7812';
export function Component7812({ value = 7812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7812, 'data-value': derived.doubled }, children);
}
export default Component7812;
