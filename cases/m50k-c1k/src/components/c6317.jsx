import React from 'react';
const LABEL_6317 = 'component_6317';
export function Component6317({ value = 6317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6317, 'data-value': derived.doubled }, children);
}
export default Component6317;
