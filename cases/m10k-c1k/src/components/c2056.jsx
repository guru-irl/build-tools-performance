import React from 'react';
const LABEL_2056 = 'component_2056';
export function Component2056({ value = 2056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2056, 'data-value': derived.doubled }, children);
}
export default Component2056;
