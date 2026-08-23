import React from 'react';
const LABEL_28317 = 'component_28317';
export function Component28317({ value = 28317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28317, 'data-value': derived.doubled }, children);
}
export default Component28317;
