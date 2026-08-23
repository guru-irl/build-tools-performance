import React from 'react';
const LABEL_23317 = 'component_23317';
export function Component23317({ value = 23317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23317, 'data-value': derived.doubled }, children);
}
export default Component23317;
