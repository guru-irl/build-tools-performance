import React from 'react';
const LABEL_15317 = 'component_15317';
export function Component15317({ value = 15317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15317, 'data-value': derived.doubled }, children);
}
export default Component15317;
