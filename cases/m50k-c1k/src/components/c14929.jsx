import React from 'react';
const LABEL_14929 = 'component_14929';
export function Component14929({ value = 14929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14929, 'data-value': derived.doubled }, children);
}
export default Component14929;
