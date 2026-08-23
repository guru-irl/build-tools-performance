import React from 'react';
const LABEL_2536 = 'component_2536';
export function Component2536({ value = 2536, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2536, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2536, 'data-value': derived.doubled }, children);
}
export default Component2536;
