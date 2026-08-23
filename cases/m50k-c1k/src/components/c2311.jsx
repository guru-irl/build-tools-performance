import React from 'react';
const LABEL_2311 = 'component_2311';
export function Component2311({ value = 2311, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2311, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2311, 'data-value': derived.doubled }, children);
}
export default Component2311;
