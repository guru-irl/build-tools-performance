import React from 'react';
const LABEL_13340 = 'component_13340';
export function Component13340({ value = 13340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13340, 'data-value': derived.doubled }, children);
}
export default Component13340;
