import React from 'react';
const LABEL_13233 = 'component_13233';
export function Component13233({ value = 13233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13233, 'data-value': derived.doubled }, children);
}
export default Component13233;
