import React from 'react';
const LABEL_14955 = 'component_14955';
export function Component14955({ value = 14955, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14955, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14955, 'data-value': derived.doubled }, children);
}
export default Component14955;
