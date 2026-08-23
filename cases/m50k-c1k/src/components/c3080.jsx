import React from 'react';
const LABEL_3080 = 'component_3080';
export function Component3080({ value = 3080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3080, 'data-value': derived.doubled }, children);
}
export default Component3080;
