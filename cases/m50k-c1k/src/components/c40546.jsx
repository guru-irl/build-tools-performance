import React from 'react';
const LABEL_40546 = 'component_40546';
export function Component40546({ value = 40546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40546, 'data-value': derived.doubled }, children);
}
export default Component40546;
