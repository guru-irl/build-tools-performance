import React from 'react';
const LABEL_13440 = 'component_13440';
export function Component13440({ value = 13440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13440, 'data-value': derived.doubled }, children);
}
export default Component13440;
