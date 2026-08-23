import React from 'react';
const LABEL_8317 = 'component_8317';
export function Component8317({ value = 8317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8317, 'data-value': derived.doubled }, children);
}
export default Component8317;
