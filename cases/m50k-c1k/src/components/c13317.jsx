import React from 'react';
const LABEL_13317 = 'component_13317';
export function Component13317({ value = 13317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13317, 'data-value': derived.doubled }, children);
}
export default Component13317;
