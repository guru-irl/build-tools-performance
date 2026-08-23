import React from 'react';
const LABEL_14218 = 'component_14218';
export function Component14218({ value = 14218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14218, 'data-value': derived.doubled }, children);
}
export default Component14218;
