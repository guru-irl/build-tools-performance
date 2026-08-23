import React from 'react';
const LABEL_11317 = 'component_11317';
export function Component11317({ value = 11317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11317, 'data-value': derived.doubled }, children);
}
export default Component11317;
