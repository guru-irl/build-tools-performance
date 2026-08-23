import React from 'react';
const LABEL_13337 = 'component_13337';
export function Component13337({ value = 13337, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13337, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13337, 'data-value': derived.doubled }, children);
}
export default Component13337;
