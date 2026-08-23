import React from 'react';
const LABEL_16317 = 'component_16317';
export function Component16317({ value = 16317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16317, 'data-value': derived.doubled }, children);
}
export default Component16317;
