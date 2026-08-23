import React from 'react';
const LABEL_14115 = 'component_14115';
export function Component14115({ value = 14115, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14115, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14115, 'data-value': derived.doubled }, children);
}
export default Component14115;
