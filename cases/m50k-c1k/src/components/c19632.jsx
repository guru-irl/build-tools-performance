import React from 'react';
const LABEL_19632 = 'component_19632';
export function Component19632({ value = 19632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19632, 'data-value': derived.doubled }, children);
}
export default Component19632;
