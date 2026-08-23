import React from 'react';
const LABEL_13824 = 'component_13824';
export function Component13824({ value = 13824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13824, 'data-value': derived.doubled }, children);
}
export default Component13824;
