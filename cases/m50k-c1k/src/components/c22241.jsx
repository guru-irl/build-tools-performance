import React from 'react';
const LABEL_22241 = 'component_22241';
export function Component22241({ value = 22241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22241, 'data-value': derived.doubled }, children);
}
export default Component22241;
